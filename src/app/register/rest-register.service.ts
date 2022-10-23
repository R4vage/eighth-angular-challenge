import { GlobalRestService } from './../core/services/global-rest.service';
import { SnackbarService } from './../shared/services/snackbar.service';
import { Router } from '@angular/router';
import { RegisterData } from './../models/rest.models';
import { Injectable } from '@angular/core';

@Injectable()
export class RestRegisterService {
  constructor(
    private globalRest: GlobalRestService,
    private snackBar:SnackbarService,
    private router: Router
  ) { }

  goToLogin () {
    this.router.navigate(['login']);
  };

  registerUser (userData: RegisterData) {
    return this.globalRest.registerUser(userData)
    .subscribe(
      {
        next: response => {
          this.snackBar.openSnackBarSuccess("Register succesfull. Please, use your credentials to login");
          this.goToLogin()
        },
        error: error => this.snackBar.openSnackBarWarning("An error has ocurred. Please try again.")
      }
    );
  };
};
