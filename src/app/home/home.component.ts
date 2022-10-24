import { GetProductsResponse } from './../models/rest.models';
import { SnackbarService } from './../shared/services/snackbar.service';
import { RestHomeService } from './rest-home.service';
import { Product } from './../models/product.models';
import { JWTService, } from './../core/services/jwt.service';
import { Component, OnInit, SkipSelf } from '@angular/core';


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
    private restService: RestHomeService,
    private snackBar: SnackbarService
  ) { };

  ngOnInit(): void {
    let decoded = this.jwt.decodeToken(this.token);
    this.user.email = decoded.email;
    this.user.name = decoded.username;
    this.restService.getProducts().subscribe(
      {
        next: (response:GetProductsResponse) => { 
          this.products = response.products
        },
        error: error => {
          this.snackBar.openSnackBarWarning("Token is been refreshed");
        }
      }
    );
  };


};
