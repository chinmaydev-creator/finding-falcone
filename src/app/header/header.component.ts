import { Component, OnInit } from '@angular/core';
import { urls } from '../constants/shared-constants';
import { SharedService } from '../service/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  goToHome() {
    this.sharedService.goToPage(urls.home);
  }

  reset() {}
}
