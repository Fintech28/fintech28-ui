import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscription:Subscription;
  loggedUser:string;
  loggedUserPhone:string;
  loggedUserEmail:string;
  loggedUserStatus:boolean;

  displayUserMenu = () => {};
  displayUserOptions = () => {};

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.displayUserMenu = () => {
      const toToggle = document.querySelector('.user-actionable');
      const toggleButton = document.querySelector('.usrnm');

      const displayOurMenu = () => {
        toToggle.classList.contains('d-none') ? 
        toToggle.classList.remove('d-none') : 
        toToggle.classList.add('d-none');
      }
      toggleButton.addEventListener('click', displayOurMenu);
    };

    this.displayUserOptions= () => {
      const toToggle = document.querySelector('.header-container') as HTMLDivElement;
      const toggleButton = document.querySelector('#togglebtn') as HTMLDivElement;

      const displayOurOptions = () => {
        toggleButton.classList.contains('h') ? 
        (toToggle.style.display = 'flex',
        toggleButton.classList.remove('h')) : 
        (toToggle.style.display = 'none',
        toggleButton.classList.add('h'));
      }
      toggleButton.addEventListener('click', displayOurOptions);
    };

    // this.displayUserMenu();
    // this.displayUserOptions();

    this.getUserData();
  };

  getUserData() {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.loggedUserEmail = res.data.email;
      this.loggedUserPhone = res.data.phone;
      this.loggedUser = res.data.name;
      this.loggedUserStatus = res.data.status;

      if(!res || res === undefined) this.router.navigate(['/login'])
    });
  }

  logOut() {
    localStorage.removeItem('f28authkey');
    this.router.navigate(['/login']);
    // window.location.reload();
  }
};
