import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tap1',
  imports: [
    CommonModule
  ],
  templateUrl: './tap1.html',
  styleUrl: './tap1.css',
})
export class Tap1 {

  users: any[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.loading = true;
    this.http
    .get<any[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      tap(res => console.log('Fetched users:', res)), //log data
      tap(() => (this.loading = false))              
     )
     .subscribe(users => {
      this.users = users; // This line denotes main action
    });
}
}