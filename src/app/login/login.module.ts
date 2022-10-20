import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { SignModule } from './../layouts/sign/sign.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SignModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
