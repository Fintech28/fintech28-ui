import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  pageTitle:string;

  constructor() { }

  ngOnInit(): void {
    this.pageTitle = 'Fintech28 - Admin | Dashboard'
  }

}
