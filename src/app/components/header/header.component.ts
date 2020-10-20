import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loanId = 2;
  loggedUser = 'Claud Watari';
  loggedUserPhone = '0700000000';
  loggedUserEmail = 'claud@mail.com'
  displayUserMenu = () => {};
  displayUserOptions = () => {};

  constructor() { }

  ngOnInit(): void {
    this.loggedUser = 'Claud Kamau Watari';
    this.loanId = 3;
    this.loggedUserPhone = '+254705724562';
    this.loggedUserEmail = 'claudwatari95@gmail.com';
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
  }

}
