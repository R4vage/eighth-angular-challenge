import { AuthInterceptor } from './../core/interceptors/AuthInterceptor';
import { LoginRoutingModule } from './login-routing.module';
import { RestLoginService } from './rest-login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SnackbarService } from './../shared/services/snackbar.service';
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
    RouterModule,
    LoginRoutingModule
  ],
  providers: [
    RestLoginService
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
