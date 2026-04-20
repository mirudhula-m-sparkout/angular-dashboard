import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  imports: [
    FormsModule
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  username = '';
  password = '';

  constructor(private router: Router) {}

  signup() {

    if (!this.username || !this.password) {
      alert('All fields required');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    users.push({
      username: this.username,
      password: this.password
    });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful');

    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}