import { Component } from '@angular/core';
import { Payment } from '../payment';
@Component({
  selector: 'app-success',
  imports: [],
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success {

  message = '';

  constructor(private paymentservice: Payment) {}

  ngOnInit() {
    this.paymentservice.payment$.subscribe(data => {
      this.message = `Payment ${data.status} - ₹${data.amount}`;
    });
  }
}
