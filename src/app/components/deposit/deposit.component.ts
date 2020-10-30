import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

import { DepositService } from '../../services/deposit.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit, OnDestroy {

  @Input() depositRequestBody = {
    email: '',
    password: ''
  };

  pageTitle:string;
  subscription:Subscription;
  userBalance:Number;
  userStatus:boolean;
  userPhone:string;
  someData:any;

  constructor(private dashboardService: DashboardService, private depositService: DepositService) { }

  ngOnInit(): void {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalance = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | Deposit';
    });
  };

  processRequest() {
    const btn = document.querySelector('#button_');
    const alertbox = document.querySelector('#alert_') as HTMLDivElement;
    
    btn.textContent = 'Processing...';
    alertbox.style.display = 'block';
    alertbox.textContent = 'Some feedback from API to display here';
  };

  makeDeposit() {
    this.subscription = this.depositService.makeDeposit(this.depositRequestBody).subscribe((res) => {
      this.someData = res;

      console.log(this.someData);
    })
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

};
