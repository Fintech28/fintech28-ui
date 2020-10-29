import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

import { ViewLoansService } from '../../services/view-loans.service';

@Component({
  selector: 'app-view-loans',
  templateUrl: './view-loans.component.html',
  styleUrls: ['./view-loans.component.css']
})
export class ViewLoansComponent implements OnInit {
  
  subscription:Subscription;
  userLoanData:any;
  userBalanceUnverified:number;
  userStatus:boolean;
  pageTitle:string;
  userTransactions:any;
  userPhone:string;
  hasPendingLoan:boolean;

  constructor(private dashboardService: DashboardService, private ViewLoansService: ViewLoansService) { }

  ngOnInit(): void {
    this.getUserData();
    this.viewLoans();
  };

  getUserData() {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalanceUnverified = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | See Transactions';
    });
  };

  viewLoans() {
    this.subscription = this.ViewLoansService.getLoans().subscribe((res) => {
      this.userBalanceUnverified = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | See Transactions';

      this.userLoanData = res;
    });

    if(this.userLoanData === undefined || this.userLoanData.length < 1)
      this.userLoanData = `No loan data`;

    console.log(this.userLoanData);
  };
  
  processRequest() {
    const btn = document.querySelector('#button_');
    const alertbox = document.querySelector('#alert_') as HTMLDivElement;
    
    btn.textContent = 'Processing...';
    alertbox.style.display = 'block';
    alertbox.textContent = 'Some feedback from API to display here';
  };

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe
  };

};
