import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

import { WithdrawService } from '../../services/withdraw.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit, OnDestroy {
  
  @Input() withdrawalRequestBody = {
    amount: '',
  };

  pageTitle:string;
  subscription:Subscription;
  userBalance:Number;
  userStatus:boolean;
  userPhone:string;
  someData:any;

  constructor(private dashboardService: DashboardService, private WithdrawService: WithdrawService) { }

  ngOnInit(): void {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.userBalance = res.data.balance;
      this.userStatus = res.data.status;
      this.userPhone= res.data.phone;
      this.pageTitle = 'Fintech28 | Withdraw';
    });
  };

  makeDeposit() {
    const btn = document.querySelector('#button_');
    const alertbox = document.querySelector('#alert_') as HTMLDivElement;

    btn.textContent = 'Processing...';

    const revertBtnText = () => {
      btn.textContent = 'Send Request';
      alertbox.style.display = 'none';
      localStorage.removeItem('f28err');
    };

    this.subscription = this.WithdrawService.withdrawAmount(this.withdrawalRequestBody).subscribe((res) => {
      const errMsg = localStorage.getItem('f28err');
      this.someData = res;

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

}
