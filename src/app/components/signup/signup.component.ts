import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';
import {Observable, Subscription } from 'rxjs';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  isThisYear = new Date().getFullYear();

  userModel = {
    name: 'Abced Efgh',
    email: 'abced@efghi.com',
    phone: '+00000002',
    password: 'mypassword'
  };

  someData:any;

  constructor(private signUpService: SignupService, private Route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  createUser() {
    const checkerbtn = document.querySelector('.btn_p');
    checkerbtn.textContent = 'Checking. Please wait...';
    this.signUpService.createUser(this.userModel).subscribe((res) => {
      this.someData = res;
      localStorage.setItem('f28authkey', this.someData.data.token);
      console.log(this.someData);
      checkerbtn.textContent = 'Redirecting...'
    }, (err) => {
      console.log(err);
      checkerbtn.textContent = 'An error occured...'
    });
  };

}
