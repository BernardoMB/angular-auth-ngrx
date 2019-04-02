import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable, of as observableOf, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private authService: AuthService;
  constructor(private injector: Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptando request');
    this.authService = this.injector.get(AuthService);
    const token: string = this.authService.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('Request', request);
    return next.handle(request);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            localStorage.removeItem('token');
            this.router.navigateByUrl('/log-in');
          }
          console.error('Response interceptor catched error!');
          return throwError(error);
        })
      );
  }
}
