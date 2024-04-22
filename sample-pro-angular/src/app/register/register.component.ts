import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { Register } from '../class/register';
import { RegisterResponse } from '../class/register-reponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean = false;
  id: number = 0;
  dataArray: any[]=[];
  savedUsers:any;

  constructor(private formBuilder: FormBuilder, private router: Router
    // ,private registerService:RegisterService<Register>
  ) { }

  get res() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]+$')])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    //BackEnd
    // this.registerService.save(this.registerForm.value).subscribe((response:RegisterResponse<Register>)=>{
    //   this.savedUsers = response;
    // });

    this.id++;
    this.registerForm.value.id = this.id;
    this.dataArray.push(this.registerForm.value);
    this.router.navigate(['/login']);
  }

}
