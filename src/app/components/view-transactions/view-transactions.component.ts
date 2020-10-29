import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

import { ViewTransactionsService } from '../../services/view-transactions.service';

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

  constructor(private dashboardService: DashboardService, private viewTransactionsService: ViewTransactionsService) { }

  ngOnInit(): void {
    this.getUserData();
    this.viewTransactions();
  };

  getUserData() {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalanceUnverified = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | See Transactions';
    });
  };

  
  viewTransactions() {
    this.subscription = this.viewTransactionsService.getTransactions().subscribe((res) => {
      this.userTransactions = res.transactions;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | See Transactions';
    });
    
    if(this.userTransactions === undefined || this.userTransactions.length < 1) 
      this.userTransactions = `No transactions found`;

    console.log(this.userTransactions);
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
