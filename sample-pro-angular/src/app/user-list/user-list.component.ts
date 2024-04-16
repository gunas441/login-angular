import { Component, OnInit } from '@angular/core';
import loginData from '../db.json';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userList:any;
  name:any
  constructor(private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.userList = loginData;
  }

}
