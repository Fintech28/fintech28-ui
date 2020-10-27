import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';

import { LoginComponent } from './components/login/login.component';

import { SignupComponent } from './components/signup/signup.component';

import { DepositComponent } from './components/deposit/deposit.component';

import { WithdrawComponent } from './components/withdraw/withdraw.component';

import { LoanRepaymentComponent } from './components/loan-repayment/loan-repayment.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'deposit',
    component: DepositComponent
  },
  {
    path: 'withdraw',
    component: WithdrawComponent
  },
  {
    path: 'repay-loan/:loanId',
    component: LoanRepaymentComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
