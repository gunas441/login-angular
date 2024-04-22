import { Component, OnInit } from '@angular/core';
import loginData from '../db.json';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { Register } from '../class/register';
import { RegisterResponse } from '../class/register-reponse';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userList:any;
  name:any;

  constructor(private route: ActivatedRoute,private router: Router,
  // private registerService:RegisterService<Register>
  ){}

  ngOnInit(): void {
    //Backend
    // this.userListView();

    //Frontend
    this.userList = loginData;
  }

  //Backend
  // userListView(){
  //   this.registerService.getRegisterList().subscribe((response:RegisterResponse<Register>)=>{
  //     this.userList = response;
  //   });
  // }

  updateData(regId:any){
    this.router.navigate(['/update/'+regId]);
  }

}
