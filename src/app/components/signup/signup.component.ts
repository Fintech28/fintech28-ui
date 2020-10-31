import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  isThisYear = new Date().getFullYear();

  @Input() userModel = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  someData:any;
  subscription:Subscription;
  pageTitle:string;

  constructor(private signUpService: SignupService, private Route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pageTitle = 'Fintech28 | Create Account'
    this.signUpService.getAuthData().subscribe((res) => {
      if(res || res !== undefined) this.router.navigate(['/dashboard']);
    });
  }

  createUser() {

    const revertBtnText = () => {
      checkerbtn.textContent = 'Create my account';
      alert_.style.display = 'none';
      localStorage.removeItem('f28err');
    };

    const checkerbtn = document.querySelector('.btn_p');
    const alert_ = document.querySelector('#alert_') as HTMLDivElement;

    checkerbtn.textContent = 'Checking. Please wait...';

    this.subscription = this.signUpService.createUser(this.userModel).subscribe((res) => {

      this.someData = res;

      if(res !== undefined && typeof res === 'object') {

        localStorage.setItem('f28authkey', this.someData.data.token);
        checkerbtn.textContent = 'Redirecting...';
        console.log(this.someData);

      } else {

        checkerbtn.textContent = 'Encountered an error!';
        const errMsg = localStorage.getItem('f28err');

        alert_.textContent = errMsg;
        alert_.style.display = 'block';

        setTimeout(revertBtnText, 3000);
      }
    });


  };

  ngOnDestroy() {
    if(this.subscription)this.subscription.unsubscribe();
  }
}
