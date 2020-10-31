import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

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
    private dashboardService: DashboardService, private AdminVerifyuserService: AdminVerifyuserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalance = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 -Admin | Verify User Account';
    });
    this.subscription = this.AdminVerifyuserService.seeAllUsers().subscribe((res) => {
      this.users = res.data;
    });
  };

  verifyUser(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    this.userId = idAttr.nodeValue.split('-')[1];
    
    console.log(this.userId);
    this.AdminVerifyuserService.verifyUser(this.userId).subscribe((res) => {
      this.router.navigate(['/admin/users'])
      this.ngOnInit();
    });
  };

};
