import { GlobalRestService } from './../core/services/global-rest.service';
import { SnackbarService } from './../shared/services/snackbar.service';
import { RestHomeService } from './rest-home.service';
import { Product } from './../models/product.models';
import { JWTService, decodedJWT } from './../core/services/jwt.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token = localStorage.getItem('accessToken') || "";
  user = {
    email: "",
    name: ""
  };
  products: Product[] = [];
  constructor(
    private jwt: JWTService,
    private restService: GlobalRestService,
    private snackBar:SnackbarService,
  ) { };

  ngOnInit(): void {
    let decoded = this.jwt.decodeToken(this.token);
    this.user.email = decoded.email;
    this.user.name = decoded.username;
    this.restService.getProducts()
    .subscribe(
      {
        next: response => { this.products = response.products },
        error: error => {
          this.snackBar.openSnackBarWarning("An error has ocurred");
        }
      }
    );
  };


};
