import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import loginData from '../db.json';
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
  userData:any

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router) { }

  get res() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.registerForm = this.formBuilder.group({
      id: [this.id],
      name: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]+$')])],
      userName: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])]
    });
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
    this.dataArray.push(this.registerForm.value);
    // this.registerForm.reset();
    this.router.navigate(['/login']);
  }
}
