import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
   payment = {
    cardNumber: '',
    expiry: ''
  };

  submitCheckout(form: any) {
    if(form.valid){
      console.log("Payment Data:", form.value);
      alert("Payment success");
    }
  }

}
