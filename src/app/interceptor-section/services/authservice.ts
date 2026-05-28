import { Injectable } from '@angular/core';
import { Fakeapiservice } from './fakeapiservice';
import { tap } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})
export class Authservice {
  
  constructor(private api: Fakeapiservice) {}

  login(data: any) {
    return this.api.login(data).pipe(
      tap((res: any) => {
        console.log('LOGIN RESPONSE:', res);
        const fakeToken = 'jwt-token-12345';
        // localstorage
        localStorage.setItem('token', fakeToken);
        //cookie set
        document.cookie = `token=${fakeToken}; path=/;`;
        console.log('TOKEN STORED IN BOTH localStorage + cookie');
      })
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    console.log('LOGOUT START');
    localStorage.removeItem('token');
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log('LOCAL + COOKIE CLEARED');
  }
}