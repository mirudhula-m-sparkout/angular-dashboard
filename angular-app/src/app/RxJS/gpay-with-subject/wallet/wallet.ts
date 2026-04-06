import { Component } from '@angular/core';
import { Payment } from '../payment';

@Component({
  selector: 'app-wallet',
  imports: [],
  templateUrl: './wallet.html',
  styleUrl: './wallet.css',
})
export class Wallet {
  
  balance = 1000;

  constructor(private paymentservice: Payment) {}

  ngOnInit() {
    this.paymentservice.payment$.subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.balance -= data.amount;
      }
    });
  }
}
