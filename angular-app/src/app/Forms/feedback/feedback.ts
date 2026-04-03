import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-feedback',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css',
})
export class Feedback {
  feedback = {
    name: '',
    email: '',
    message: ''
  };

  submitFeedback(form: any) {
    if(form.valid){
      console.log("Feedback:", form.value);
      alert("Feedback Submitted!");
    }
  }
}
