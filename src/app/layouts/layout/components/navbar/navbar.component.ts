import { Animations } from './../../../../../assets/animations/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    Animations.topRightScale
  ]
})
export class NavbarComponent {
  userInfoOpened = false;
  @Input() user = {
    email:"",
    name: ""
  };
  constructor(private router: Router) { };

  logOut () {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    this.router.navigate(['login']);
  }

  toggleUserInfo () {
    this.userInfoOpened = !this.userInfoOpened;
  };
}
