import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Authservice } from '../services/authservice';
import { tap } from 'rxjs';
import { catchError,throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {


  //request-outgoing request
  //next-forward request to server

  const router = inject(Router);
  const auth = inject(Authservice);
  console.log('Interceptor has triggered:', req.url);
  const token = auth.getToken();

  if (token) {
    console.log('Now-Token added to your request');
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  //return next(req);
  //response interceptor
  return next(req).pipe(
    tap(event => {
      console.log('Response received:', event);
    }),

    catchError((error: any) => {

      console.log('Error intercepted:', error);

      if (error.status === 401) {
        console.log('Session expired → logout');
        auth.logout();
        router.navigate(['/login']);
        console.log( 'Logout');
      }

      if (error.status === 500) {
        console.log('Server error');
      }
      return throwError(() => error);
    })
  );
};