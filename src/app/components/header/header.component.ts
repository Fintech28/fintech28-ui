import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subscription:Subscription;

  loanId = 2;
  loggedUser:string;
  loggedUserPhone:string;
  loggedUserEmail:string;
  displayUserMenu = () => {};
  displayUserOptions = () => {};

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loanId = 3;
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

    this.displayUserMenu();
    this.displayUserOptions();

    this.getUserData();
  };

  getUserData() {
    this.subscription = this.dashboardService.getAuthData().subscribe((res) => {
      this.loggedUserEmail = res.data.email;
      this.loggedUserPhone = res.data.phone;
      this.loggedUser = res.data.name;
    });
  }
};
