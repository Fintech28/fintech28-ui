import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  userBalance:Number;
  userStatus:boolean;
  pageTitle:string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalance = res.data.balance;
      this.userStatus = res.data.status;
      this.pageTitle = 'Fintech28 | Dashboard';
    });
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
}
