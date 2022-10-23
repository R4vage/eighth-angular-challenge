import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode"

export interface decodedJWT {
  sub:number,
  username: string,
  email: string,
  iat:number,
  exp:number,
}

@Injectable()
export class JWTService {
  constructor() { }

  decodeToken (token:string):decodedJWT{
    let decoded
    try {
      decoded = jwt_decode(token) 
    } catch (error) {
      decoded = null
    }
    if (decoded) {
      return jwt_decode(token)
    }
    return {
      sub: 0,
      username: '',
      email: '',
      iat:0,
      exp:0,
    }
  }
}
