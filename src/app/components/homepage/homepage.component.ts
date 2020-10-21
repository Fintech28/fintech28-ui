import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';
import {Observable, Subscription } from 'rxjs';

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
