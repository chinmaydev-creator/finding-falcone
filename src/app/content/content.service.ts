import { Injectable } from "@angular/core";
import { urls } from "../constants/shared-constants";
import { SharedService } from "../service/shared/shared.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService{

  constructor(private sharedService: SharedService){}

  getPlanets() {
    return this.sharedService.get(urls.getPlanets);
  }

  getToken(){
    return this.sharedService.post(urls.getToken, '', {'Accept': 'application/json'} );
  }

  getVehicles(){
    return this.sharedService.get(urls.getvehicles);
  }

  findFalcone(body: any){
    return this.sharedService.post(urls.findFalcone, body, {'Accept': 'application/json', 'Content-Type': 'application/json'})
  }
}
