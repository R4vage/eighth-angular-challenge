import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) {};

  openSnackBarSuccess (message: string):void {
    this.snackBar.open( message, 'Close', {
      duration: 5000,
      panelClass: ['green-snackbar', 'register-snackbar'],
    });
  };

  openSnackBarWarning (message: string):void {
    this.snackBar.open( message, 'Close', {
      duration: 5000,
      panelClass: ['red-snackbar', 'register-snackbar'],
    });
  };
};
