import { Product } from './../models/product.models';
import { SnackbarService } from './../shared/services/snackbar.service';
import { GlobalRestService } from './../core/services/global-rest.service';
import { GetProductsResponse } from './../models/rest.models';
import { Injectable } from '@angular/core';

@Injectable()
export class RestHomeService {
  url = "http://sheltered-oasis-97086.herokuapp.com"
  products:Product[] = []
  constructor(
    private snackBar:SnackbarService,
    private globalRest: GlobalRestService
    ) { }
  
    getProducts(){
      return this.globalRest.getProducts()
    }
}
