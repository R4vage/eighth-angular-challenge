import { RegisterRoutingModule } from './register-routing.module';
import { SnackbarService } from './../shared/services/snackbar.service';
import { RestRegisterService } from './rest-register.service';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { SignModule } from './../layouts/sign/sign.module';
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
    RouterModule,
    RegisterRoutingModule
  ],
  exports:[
    RegisterComponent
  ],
  providers: [
    RestRegisterService,
    SnackbarService
  ]
})
export class RegisterModule { }
