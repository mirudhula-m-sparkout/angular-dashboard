import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tap2',
  imports: [
    CommonModule
  ],
  templateUrl: './tap2.html',
  styleUrl: './tap2.css',
})
export class Tap2 {
  
  users: any[] = [];
  orders: any[] = [];

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.http.get<any[]>('https://fakestoreapi.com/users')
    .pipe(
      tap(res => console.log('Users fetched', res.length)),
    )
    .subscribe(users => this.users = users); 
  }

  loadOrders() {
  this.http.get<any[]>('https://fakestoreapi.com/carts')
  .pipe(
     tap(res => console.log('Orders fetched', res.length)), 
    )
    .subscribe(orders => this.orders = orders); 
  }
}

