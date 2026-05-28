import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export interface UserData {
  name: string;
  info: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReplaySubject1 {

  private usersSubject = new ReplaySubject<UserData[]>(3); 
  users$ = this.usersSubject.asObservable();

  private users: UserData[] = [
    { name: 'Alice', info: 'Active' },
    { name: 'Bob', info: 'Inactive' },
    { name: 'Charlie', info: 'Active' },
    { name: 'David', info: 'Active' }

  ];

  constructor() {
    this.usersSubject.next(this.users);
  }

  addUser(user: UserData) {
    this.users.push(user);
    this.usersSubject.next(this.users);
  }
}