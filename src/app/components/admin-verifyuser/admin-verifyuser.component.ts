import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

import { AdminVerifyuserService } from '../../services/admin-verifyuser.service';

@Component({
  selector: 'app-admin-verifyuser',
  templateUrl: './admin-verifyuser.component.html',
  styleUrls: ['./admin-verifyuser.component.css']
})
export class AdminVerifyuserComponent implements OnInit {

  pageTitle:string;
  subscription:Subscription;
  userBalance:Number;
  userStatus:boolean;
  userPhone:string;
  someData:any;

  users:any;

  userId:number;

  constructor(
    private dashboardService: DashboardService, 
    private AdminVerifyuserService: AdminVerifyuserService,
    ) { }

  ngOnInit(): void {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalance = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 -Admin | See Users';
    });
    this.subscription = this.AdminVerifyuserService.seeAllUsers().subscribe((res) => {
      this.users = res.data;

      console.log(this.users);
    });
  };

};
