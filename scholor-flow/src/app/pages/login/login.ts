import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authservice';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  login() {
    if (!this.username || !this.password) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((u: any) =>
      u.username === this.username &&
      u.password === this.password
    );

    if (
      (this.username === 'student' && this.password === '1234') ||
      user
    ) {
      this.auth.login();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}