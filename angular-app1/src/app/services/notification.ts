import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({ 
  providedIn: 'root' 
})
export class Notificatio{

  private store = new ReplaySubject<string>(3); 
  
  stream$ = this.store.asObservable();

  push(msg: string) {
    this.store.next(msg);
  }
}