import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import loginData from '../db.json';
import { RegisterService } from '../service/register.service';
import { Register } from '../class/register';
import { RegisterResponse } from '../class/register-reponse';
@Component({
  selector: 'app-update-register',
  templateUrl: './update-register.component.html',
  styleUrl: './update-register.component.css'
})
export class UpdateRegisterComponent implements OnInit{
  registerForm!: FormGroup;
  submitted: boolean = false;
  id: number = 0;
  dataArray: any[]=[];
  userData:any;
  savedUsers:any;
  userList:any;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router
    // ,private registerService:RegisterService<Register>
  ) { }

  get res() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['regId'];
    this.registerForm = this.formBuilder.group({
      regId: [this.id],
      fullName: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z ]+$')])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])]
    });

    //Backend
    // this.registerService.getByRegId(this.id).subscribe((response:RegisterResponse<Register>)=>{
    //   this.userList = response;
    //   this.registerForm.patchValue(this.userList);
    // });

    //Frontend
    this.userData = loginData;
    for(var i=0;this.userData.length>i;i++){
      this.registerForm.patchValue(this.userData[i]);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
     //Backend
    // this.registerService.save(this.registerForm.value).subscribe((response:RegisterResponse<Register>)=>{
    //   this.savedUsers = response;
    // });

    //Frontend
    this.dataArray.push(this.registerForm.value);

    this.router.navigate(['/user-list']);
  }
}
