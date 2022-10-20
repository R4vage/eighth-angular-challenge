import { UserField } from './../models/user.models';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  	passwordShown = false


  
  registerForm = new FormGroup ({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
      Validators.pattern(/^[a-zA-Z ]*$/)
    ]),
    lastName: new FormControl('' , [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25),
      Validators.pattern(/^[a-zA-Z ]*$/)
    ]),
    userName: new FormControl('' , [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(/^[\w.-]*$/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,}$/),
      Validators.minLength(8),
      Validators.maxLength(40)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm)
  }

  getField (field:UserField) :AbstractControl <any> | null  {
    return this.registerForm.get(field)
  }


  toggleVisibility () {
    this.passwordShown= !this.passwordShown
  }


}
