import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Servicesubject {
  private messageSubject=new Subject<string>();

  message$=this.messageSubject.asObservable();

  sendMessage(msg:string){
    this.messageSubject.next(msg);
  }
}
