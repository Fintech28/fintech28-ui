import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit, OnDestroy {

  subscription:Subscription;
  userBalance:number;
  userBalanceUnverified:number;
  userStatus:boolean;
  pageTitle:string;
  userTransactions:any;
  userPhone:string;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalanceUnverified = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | See Transactions';
    });

    this.userTransactions = [
      {
        transactionType: 'Deposit',
        amount: 450,
        dateTime: '2020/10/27'
      },
      {
        transactionType: 'Withdrawal',
        amount: 100,
        dateTime: '2020/10/18'
      },
      {
        transactionType: 'Withdrawal',
        amount: 1050,
        dateTime: '2020/10/06'
      },
      {
        transactionType: 'Deposit',
        amount: 10000,
        dateTime: '2020/10/02'
      },
      {
        transactionType: 'Deposit',
        amount: 750,
        dateTime: '2020/09/23'
      }
    ];
    this.userBalance = this.userTransactions.reduce((a, b) => ({amount: a.amount + b.amount})).amount;

    this.userBalance = this.userBalance;
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
  }
}
