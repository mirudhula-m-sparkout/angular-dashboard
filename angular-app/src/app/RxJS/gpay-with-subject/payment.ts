import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Payment {

  private paymentSubject=new Subject<any>();

  payment$=this.paymentSubject.asObservable();

  //store and send data which listens to it
  sendPayment(data :any ){
    this.paymentSubject.next(data);
  }

}
