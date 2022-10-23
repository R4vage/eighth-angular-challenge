import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, map, of, BehaviorSubject, throwError, filter, take, switchMap, catchError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let mainToken = localStorage.getItem('accessToken');
    if (!mainToken) {
      return next.handle(req);
    };
    if (!req.headers.has('authorization')) {
      console.log("adding headers");
      return next.handle(this.addTokenToHeader(req,mainToken));     
    };
    return next.handle(req);
  }

  private addTokenToHeader (request: HttpRequest<any>, token: string) {
    return request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
  };
}
