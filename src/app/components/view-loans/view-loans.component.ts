import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-view-loans',
  templateUrl: './view-loans.component.html',
  styleUrls: ['./view-loans.component.css']
})
export class ViewLoansComponent implements OnInit {
  
  subscription:Subscription;
  userBalance:number;
  userBalanceUnverified:number;
  userStatus:boolean;
  pageTitle:string;
  userTransactions:any;
  userPhone:string;
  hasPendingLoan:boolean;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getUserData();
  };

  getUserData() {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalanceUnverified = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | See Transactions';
    });

    this.userTransactions = [
      {
        principal: 45500,
        amount: 450,
        dateBorrowed: '2020/10/27',
        isFullyPaid: false
      },
      {
        principal: 67000,
        amount: 450,
        dateBorrowed: '2020/10/09',
        isFullyPaid: true
      },
      {
        principal: 13000,
        amount: 450,
        dateBorrowed: '2020/08/28',
        isFullyPaid: true
      },
    ];

    this.userTransactions.forEach(transaction => {
      if(transaction.isFullyPaid === true) return this.hasPendingLoan = false;
      else this.hasPendingLoan = true;
    });

    console.log(this.hasPendingLoan);

    this.userBalance = 121350;
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
