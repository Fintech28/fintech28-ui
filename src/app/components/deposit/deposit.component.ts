import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  pageTitle:string;
  subscription:Subscription;
  userBalance:Number;
  userStatus:boolean;
  userPhone:string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalance = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | Dashboard';
    });
  };

  processRequest() {
    const btn = document.querySelector('#button_');
    const alertbox = document.querySelector('#alert_') as HTMLDivElement;
    
    btn.textContent = 'Processing...';
    alertbox.style.display = 'block';
    alertbox.textContent = 'Some feedback from API to display here';
  };

};
