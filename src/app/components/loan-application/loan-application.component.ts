import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

import { LoanApplicationService } from '../../services/loan-application.service';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit, OnDestroy {

  @Input() depositRequestBody = {
    amount: '',
  };

  pageTitle:string;
  subscription:Subscription;
  userBalance:Number;
  userStatus:boolean;
  userPhone:string;
  someData:any;

  constructor(private dashboardService: DashboardService, 
    private loanApplicationService: LoanApplicationService) { }

  ngOnInit(): void {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalance = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | Apply for loan';
    });
  };

  applyForLoan() {
    const btn = document.querySelector('#button_');
    const alertbox = document.querySelector('#alert_') as HTMLDivElement;

    btn.textContent = 'Processing...';

    const revertBtnText = () => {
      btn.textContent = 'Send Request';
      alertbox.style.display = 'none';
      localStorage.removeItem('f28err');
    };

    this.subscription = this.loanApplicationService.applyForLoan(this.depositRequestBody).subscribe((res) => {
      this.someData = res;
      
      const errMsg = localStorage.getItem('f28err');

      if(this.someData === undefined) {
        this.someData = `An error occured`;
        alertbox.style.display = 'block';
        alertbox.textContent = errMsg;

        setTimeout(revertBtnText, 3000);
      }

      console.log(this.someData);
    });
  }


  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

};
