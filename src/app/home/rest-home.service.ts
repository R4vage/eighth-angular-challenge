import { GetProductsResponse } from './../models/rest.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestHomeService {
  url = "http://sheltered-oasis-97086.herokuapp.com"
  constructor(
    private http: HttpClient
    ) { }
  

}
