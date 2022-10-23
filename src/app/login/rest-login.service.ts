import { GlobalRestService } from './../core/services/global-rest.service';
import { Router } from '@angular/router';
import { SnackbarService } from './../shared/services/snackbar.service';
import { LoginData } from './../models/rest.models';
import { Injectable } from '@angular/core';

@Injectable()
export class RestLoginService {
  constructor(
    private globalRest: GlobalRestService,
    private snackBar: SnackbarService,
    private router: Router
  ) {}

  loginUser(userData: LoginData) {
    return this.globalRest.loginUser(userData).subscribe({
      next: (response) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        this.goToHome();
      },
      error: (error) => {
        if (error.status === 401) {
          this.snackBar.openSnackBarWarning(
            "Wrong password or the e-mail isn't registered"
          );
        } else {
          this.snackBar.openSnackBarWarning(
            'An error has ocurred, please try again'
          );
        }
      },
    });
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
