import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordShown = false

  loginForm = new FormGroup ({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(100)
    ]),
  })

  get email ():AbstractControl <any> | null {
    return this.loginForm.get('email')
  }

  get password ():AbstractControl <any> | null {
    return this.loginForm.get('password')
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value)
  }

  toggleVisibility () {
    this.passwordShown= !this.passwordShown
  }
}
