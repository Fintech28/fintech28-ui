import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

import { DashboardService } from '../../services/dashboard.service';

import { AdminApproveloanService } from '../../services/admin-approveloan.service';

@Component({
  selector: 'app-admin-approveloan',
  templateUrl: './admin-approveloan.component.html',
  styleUrls: ['./admin-approveloan.component.css']
})
export class AdminApproveloanComponent implements OnInit {

  pageTitle:string;
  subscription:Subscription;
  loans:any;
  loanId:number;

  constructor(
    private dashboardService: DashboardService, private adminApproveloanService: AdminApproveloanService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.adminApproveloanService.seeAllLoans().subscribe((res) => {
      this.loans = res.data;

      console.log(this.loans);
    });
    this.pageTitle = 'Fintech28 -Admin | Approve Loans';    
  };

  approveLoan(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    this.loanId = idAttr.nodeValue.split('-')[1];
    
    console.log(this.loanId);
    this.adminApproveloanService.approveLoan(this.loanId).subscribe((res) => {
      this.ngOnInit();
    });
  };

}
