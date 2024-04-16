import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder,private http:HttpClient) { }

  get res() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]+$')])],
      userName: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.id++;
    this.registerForm.value.id = this.id;
    this.dataArray.push(this.registerForm.value);
  }

}
