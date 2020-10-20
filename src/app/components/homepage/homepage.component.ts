import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';
import {Observable, Subscription } from 'rxjs';
import { ViewLoansService } from '../../services/view-loans.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isThisYear = new Date().getFullYear();
  constructor(private viewLoans: ViewLoansService) { }

  ngOnInit(): void {
    this.initBackend();
  }
  initBackend() {
    this.viewLoans.getLoans().subscribe((res) => {
      console.log(res);
    });
  }

}
