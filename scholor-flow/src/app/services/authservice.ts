import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  //check in the browser
  isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  //login
  login() {
    if (this.isBrowser()) {
      localStorage.setItem('auth', 'true');
    }
  }

  //check auth
  isAuthenticated(): boolean {
    if (this.isBrowser()) {
      return localStorage.getItem('auth') === 'true';
    }
    return false;
  }

  
  //logout
  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('auth');
    }
    this.router.navigate(['/login']);
  }
}