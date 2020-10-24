import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  subscription:Subscription;
  userId:Number;
  userData:any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.userId = 1;
    this.getUserData();
  }

  getUserData() {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => console.log(res));
  }

}
