import { Component, OnInit } from '@angular/core';
import { urls } from '../constants/shared-constants';
import { SharedService } from '../service/shared/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  goToProblem() {
    this.sharedService.goToPage(urls.problem);
  }
}
