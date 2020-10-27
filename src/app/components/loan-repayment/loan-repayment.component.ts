import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-loan-repayment',
  templateUrl: './loan-repayment.component.html',
  styleUrls: ['./loan-repayment.component.css']
})
export class LoanRepaymentComponent implements OnInit, OnDestroy {

  pageTitle:string;
  subscription:Subscription;
  userBalance:Number;
  userStatus:boolean;
  userPhone:string;
  loanId:number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalance = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | Repay loan';
    });

    this.loanId = 543210;
  };

  processRequest() {
    const btn = document.querySelector('#button_');
    const alertbox = document.querySelector('#alert_') as HTMLDivElement;
    
    btn.textContent = 'Processing...';
    alertbox.style.display = 'block';
    alertbox.textContent = 'Some feedback from API to display here';
  };

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }
};
