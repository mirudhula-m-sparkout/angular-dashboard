import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forkuserdetail',
  imports: [
    CommonModule
  ],
  templateUrl: './forkuserdetail.html',
  styleUrl: './forkuserdetail.css',
})
export class Forkuserdetail implements OnInit{

  users: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const calls = [
      this.http.get('https://jsonplaceholder.typicode.com/users/1'),
      this.http.get('https://jsonplaceholder.typicode.com/users/2'),
      this.http.get('https://jsonplaceholder.typicode.com/users/3')
    ];

    forkJoin(calls).subscribe((results: any[]) => {
      this.users = results;
      this.loading = false;
    });
  }
}
