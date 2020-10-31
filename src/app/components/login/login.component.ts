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
  
  isThisYear = new Date().getFullYear();
  constructor(private loginService: LoginService, private Route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getAuthData().subscribe((res) => {
      if(res) this.router.navigate(['/dashboard'])
    });
  }

  loginUser() {
    const checkerbtn = document.querySelector('.btn_p');
    const alert_ = document.querySelector('#alert_') as HTMLDivElement;

    checkerbtn.textContent = 'Checking. Please wait...';

    this.loginService.loginUser(this.userModel).subscribe((res) => {

      this.someData = res;

      const revertBtnText = () => {
        checkerbtn.textContent = 'Log in';
        alert_.style.display = 'none';
        localStorage.removeItem('f28err');
      };

      if(res !== undefined && typeof res === 'object') {

        localStorage.setItem('f28authkey', this.someData.data.token);
        checkerbtn.textContent = 'Redirecting...';
        alert_.textContent = this.someData.message;
        alert_.style.display = 'block';
        console.log(this.someData);
        
        setTimeout(revertBtnText, 3000);

      } else {

        checkerbtn.textContent = 'Encountered an error!';

        const errMsg = localStorage.getItem('f28err');

        alert_.textContent = errMsg;
        alert_.style.display = 'block';
        console.log(this.someData);

        setTimeout(revertBtnText, 3000);
      }
    });


  };
}
