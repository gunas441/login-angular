import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import loginData from '../db.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted: boolean = false;
  alertMsg:any;

  constructor( private formBuilder: FormBuilder,private router:Router,
    private activatedroute: ActivatedRoute){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])]
    });
  }

  get loc(){
   return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    const objName = loginData.find(e=>e.userName.trim() == this.loginForm.value.userName.trim());
    const objPassword = loginData.find(e=>e.password.trim() == this.loginForm.value.password.trim());
    if(objName==undefined){
      this.alertMsg="Invalid User Name!";
      this.alertClose();
      return;
    }else if(objPassword==undefined){
      this.alertMsg="Invalid Password!";
      this.alertClose();
      return;
    }else{
      this.router.navigate(['/user-list/'+objName.name]);
    }
  }

  alertClose(){
    setTimeout(() => {
      this.alertMsg=false;
      }, 5000);
  }

}
