import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { SignModule } from './../layouts/sign/sign.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SignModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
