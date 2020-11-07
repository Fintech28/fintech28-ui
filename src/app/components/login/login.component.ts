import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() userModel = {
    email: '',
    password: ''
  };

  someData: any;
  pageTitle:string;
  
  isThisYear = new Date().getFullYear();
  constructor(private loginService: LoginService, private Route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pageTitle = 'Fintech28 | Log In';

    this.loginService.getAuthData().subscribe((res) => {
      if(res || res !== undefined) this.router.navigate(['/dashboard']);
      this.ngOnInit();
    });
  }

  loginUser() {
    const checkerbtn = document.querySelector('#submit-btn');
    const alert_ = document.querySelector('.msg-box') as HTMLDivElement;
    const alertmsg_ = document.querySelector('#alerter') as HTMLDivElement;

    checkerbtn.textContent = 'Checking. Please wait...';

    this.loginService.loginUser(this.userModel).subscribe((res) => {

      this.someData = res;

      const revertBtnText = () => {
        checkerbtn.textContent = 'Log in';
        alert_.classList.add('h');
        localStorage.removeItem('f28err');
      };

      if(res !== undefined && typeof res === 'object') {

        localStorage.setItem('f28authkey', this.someData.data.token);
        checkerbtn.textContent = 'Redirecting...';
        alert_.textContent = this.someData.message;
        alert_.classList.remove('h');
        console.log(this.someData);
        
        setTimeout(revertBtnText, 3000);

      } else {

        checkerbtn.textContent = 'Encountered an error!';

        const errMsg = localStorage.getItem('f28err');

        alertmsg_.textContent = errMsg;
        alert_.classList.remove('h');
        console.log(this.someData);

        setTimeout(revertBtnText, 3000);
      }
    });


  };

  exitBox() {
    document.querySelector('.close-btn').addEventListener('click', () => {
      document.querySelector('.msg-box').classList.add('h');
    });
  };
}
