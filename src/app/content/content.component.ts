import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet';
import { Result } from '../models/result';
import { Vehicle } from '../models/vehicle';
import { LocalStorageService } from '../service/local-storage/local-storage.service';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentService]
})
export class ContentComponent implements OnInit {

  result: Result = { planet_name: "", status: "", error: "" };
  planets: Planet[] = [];
  selectedDestinations = ["", "", "", ""];
  selectedVehicles = ["", "", "", ""];
  vehicles: Vehicle[] = [];
  timeTaken: number = 0;
  foundOnPlanet = "";
  isQuestStarted = false;
  isResultSuccess = false;
  showResults = false;

  constructor(private contentService: ContentService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.clearToken();
    this.getPlanets();
    this.getVehicles();
    this.getTokenFromServer();
    console.log("token", this.getTokenFromStorage('token'));
  }

  clearToken() {
    this.localStorageService.clearToken();
  }

  getPlanets() {
    this.contentService.getPlanets().subscribe(data => this.planets = data as Planet[])
  }

  getTokenFromServer() {
    this.contentService.getToken().subscribe(data => this.setTokenInLocalStorage(data));
  }

  getTokenFromStorage(key: string) {
    return this.localStorageService.getJsonValue(key);
  }

  getVehicles() {
    this.contentService.getVehicles().subscribe(data => this.vehicles = data as Vehicle[])
  }

  findFalcone() {
    this.showResults = true;
    this.isQuestStarted = false;
    const tokenObj = this.getTokenFromStorage('token');
    const body = { "token": tokenObj['token'], "planet_names": this.selectedDestinations, "vehicle_names": this.selectedVehicles };
    console.log(JSON.stringify(body));
    this.contentService.findFalcone(JSON.stringify(body)).subscribe(data => { this.result = data as Result; this.isResultSuccess = this.result?.status == "success" ? true : false });
  }

  home() {
    this.isQuestStarted = false;
    this.showResults = false;
    this.reset();
  }

  reset() {
    this.selectedVehicles = ["", "", "", ""];
    this.selectedDestinations = ["", "", "", ""];
  }

  setTokenInLocalStorage(data: any) {
    console.log(data['token']);
    this.localStorageService.setJsonValue('token', data);
  }

}
