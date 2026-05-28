import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root'
})

export class Fakeapiservice{
 
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }

  getProfile() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    //error api-->dashboard error
    //return this.http.get('https://jsonplaceholder.typicode.com/todos/1nn');
  }
}