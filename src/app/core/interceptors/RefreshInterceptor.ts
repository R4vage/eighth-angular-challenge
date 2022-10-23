import { Router } from '@angular/router';
import { SnackbarService } from './../../shared/services/snackbar.service';
import { GlobalRestService } from './../services/global-rest.service';
import { Injectable, Injector } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {
  Observable,
  BehaviorSubject,
  throwError,
  filter,
  take,
  switchMap,
  catchError,
} from 'rxjs';
@Injectable()
export class RefreshInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(
    private restService: GlobalRestService,
    private snackBar: SnackbarService,
    private router: Router,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenRefresh = localStorage.getItem('refreshToken');

    if (tokenRefresh && !req.url.includes('auth')) {
      return next.handle(req).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            this.handleUnauthorized(req, next, tokenRefresh);
          }
          return throwError(() => new Error(error));
        })
      );
    }
    return next.handle(req);
  }

  private handleUnauthorized(
    request: HttpRequest<any>,
    next: HttpHandler,
    token: string
  ) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      return this.restService.refreshToken(token).subscribe({
        next: response => {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
          location.reload();
          this.refreshTokenSubject.next(response.accessToken);
          return next.handle(this.addTokenToHeader(request, response.accessToken));
        },
        error: error => {
          this.isRefreshing = false;
          this.logout();
          return throwError(() => new Error("Session has expired"));
        }
      })
    }
    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenToHeader(request, token)))
    );
  };
  private logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.snackBar.openSnackBarWarning('Session has expired');
    this.router.navigate(['login']);
  }

  private addTokenToHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
  }
}
      /* I think this is the proper way to make this work.
      .pipe(
        switchMap((res) => {
          console.log('inside switch');
          this.isRefreshing = false;
          localStorage.setItem('accessToken', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          this.refreshTokenSubject.next(res.accessToken);
          return next.handle(this.addTokenToHeader(request, res.accessToken));
        }),
        catchError((error) => {
            console.log(error)
            this.isRefreshing = false
            this.logout()
            return throwError(() => new Error("Session has expired"))
        }),
      )
      
      */