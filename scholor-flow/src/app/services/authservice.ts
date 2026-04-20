import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  login(): void {
    if (this.isBrowser()) {
      localStorage.setItem('auth', 'true');
    }
  }

  isAuthenticated(): boolean {
    if (this.isBrowser()) {
      return localStorage.getItem('auth') === 'true';
    }
    return false;
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('auth');
    }
    this.router.navigate(['/login']);
  }
}