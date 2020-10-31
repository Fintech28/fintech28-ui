import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooternavComponent } from './components/footernav/footernav.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { LoanRepaymentComponent } from './components/loan-repayment/loan-repayment.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { ViewLoansComponent } from './components/view-loans/view-loans.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';
import { AdminVerifyuserComponent } from './components/admin-verifyuser/admin-verifyuser.component';
import { AdminApproveloanComponent } from './components/admin-approveloan/admin-approveloan.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooternavComponent,
    LoanApplicationComponent,
    LoanRepaymentComponent,
    DepositComponent,
    WithdrawComponent,
    ViewLoansComponent,
    ViewTransactionsComponent,
    AdminVerifyuserComponent,
    AdminApproveloanComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
