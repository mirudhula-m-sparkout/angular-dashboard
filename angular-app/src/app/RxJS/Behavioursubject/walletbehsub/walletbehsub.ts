import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet-service';
@Component({
  selector: 'app-walletbehsub',
  imports: [],
  templateUrl: './walletbehsub.html',
  styleUrl: './walletbehsub.css',
})
export class Walletbehsub implements OnInit {

   balance: number = 0;

  constructor(private walletService: WalletService) {}

  ngOnInit() {
   
    this.walletService.balance$.subscribe(val => {
      this.balance = val; 
      console.log("Balance updated:", val);
    });
  }

  addMoney() {
    this.walletService.deposit(1000); 
  }

  takeMoney() {
    this.walletService.withdraw(500); 
  }

}
