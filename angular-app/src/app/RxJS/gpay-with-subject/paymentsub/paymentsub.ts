import { Component } from '@angular/core';
import { Payment } from '../payment';
@Component({
  selector: 'app-paymentsub',
  imports: [],
  templateUrl: './paymentsub.html',
  styleUrl: './paymentsub.css',
})
export class Paymentsub {
  
  constructor(private paymentService: Payment) {}
  pay() {
    const paymentData = {
      status: 'SUCCESS',
      amount: 500,
      txnId: 'TXN123'
    };

    this.paymentService.sendPayment(paymentData);
  }
}
