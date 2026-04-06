import { Component } from '@angular/core';
import { Payment } from '../payment';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {

  transactions: any[] = [];

  constructor(private paymentService: Payment) {}

  ngOnInit() {
    this.paymentService.payment$.subscribe(data => {
      this.transactions.push(data);
    });
  }
}
