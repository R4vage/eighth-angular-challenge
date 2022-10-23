import { Injectable } from '@angular/core';
import { Route, UrlSegment, UrlTree, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanLoad, CanActivate{

  constructor(private router: Router) {}

  canLoad(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (localStorage.getItem('accessToken')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
};
