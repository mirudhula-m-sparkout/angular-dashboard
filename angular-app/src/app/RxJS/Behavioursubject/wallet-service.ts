import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WalletService {

  private balance = new BehaviorSubject<number>(5000); 
  balance$ = this.balance.asObservable(); 
  deposit(amount: number) {
    this.balance.next(this.balance.value + amount); 
  }

  withdraw(amount: number) {
    this.balance.next(this.balance.value - amount); 
}
}



