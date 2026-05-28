import { Component } from '@angular/core';
import { Authservice } from '../../services/authservice';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-flow',
  imports: [
    FormsModule
  ],
  templateUrl: './login-flow.html',
  styleUrl: './login-flow.css',
})
export class LoginFlow {
  username = '';
  password = '';

  constructor(private auth: Authservice, private router: Router) {}

  login() {
    this.auth.login({
      username: this.username,
      password: this.password
    }).subscribe(() => {

      console.log('LOGIN SUCCESS');

      this.router.navigate(['/dashboard']);
    });
  }
}