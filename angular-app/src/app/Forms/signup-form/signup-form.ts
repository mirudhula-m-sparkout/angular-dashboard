import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  imports: [FormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css',
})
export class SignupForm {

  user = {
    username:'Mirudhula M',
    email:'mirudhula864@gmail.com',
    password:''
  };

  submitForm(form :any){
    if(form.valid){
      console.log("Signup-done");
      alert("Sucess-signup");
    }
    else{
      alert("Error");
    }
  }
}
