import { LoginResponse, GetProductsResponse, LoginData, RegisterResponse } from './../../models/rest.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalRestService {
url = "http://sheltered-oasis-97086.herokuapp.com"
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private http: HttpClient) {
  }
  refreshToken (token:string) {
    return this.http.post<LoginResponse>(this.url + '/auth/refresh', {
      refreshToken: token
    }, this.httpOptions);
  }

  getProducts () {
    return this.http.get<GetProductsResponse>(this.url + "/products")
  }

  loginUser (userData: LoginData) {
    return this.http.post<LoginResponse>(this.url + "/auth/login", userData)
  }

  registerUser (userData: LoginData) {
    return this.http.post<RegisterResponse>(this.url + "/auth/signup", userData, this.httpOptions)
  }
}
