import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  submitLogin(form: any) {
    if(form.valid){
      alert("Login Successful!");
      console.log("Login Data:", form.value);
    } else {
      alert("Form Invalid!");
    }
  }
}
