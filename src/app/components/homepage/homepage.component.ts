import { Component, OnInit } from '@angular/core';

// import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isThisYear = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
