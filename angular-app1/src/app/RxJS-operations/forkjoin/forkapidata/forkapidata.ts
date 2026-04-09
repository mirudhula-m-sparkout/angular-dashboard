import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-forkapidata',
  imports: [
    CommonModule
  ],
  templateUrl: './forkapidata.html',
  styleUrl: './forkapidata.css',
})
export class Forkapidata implements OnInit{

  user: any = null;
  posts: any[] = [];
  comments: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    forkJoin({
      user: this.http.get('https://jsonplaceholder.typicode.com/users/1'),
      posts: this.http.get('https://jsonplaceholder.typicode.com/users/1/posts'),
      comments: this.http.get('https://jsonplaceholder.typicode.com/users/1/comments')
    }).subscribe(results => {
      this.user = results.user;
      this.posts = results.posts as any[];
      this.comments = results.comments as any[];
      this.loading = false;
    });
  }
}

