import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AdminSeeUserService } from '../../services/admin-see-user.service';

@Component({
  selector: 'app-admin-see-user',
  templateUrl: './admin-see-user.component.html',
  styleUrls: ['./admin-see-user.component.css']
})
export class AdminSeeUserComponent implements OnInit {

  userId:number;
  pageTitle:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private AdminSeeUserService: AdminSeeUserService
    ) { }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params.userId;
    this.userId = userId;
    this.pageTitle = 'Fintech28 -Admin | Verify User Account';
    console.log(this.userId);
  }

  verifyUser() {
    const userId = this.activatedRoute.snapshot.params.userId;
    this.userId = userId;
    this.AdminSeeUserService.verifyUser(this.userId).subscribe((res) => {
      console.log(res);
    });
  };

}
