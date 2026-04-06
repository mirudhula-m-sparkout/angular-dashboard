import { Component, OnInit } from '@angular/core';
import { Servicesubject } from '../servicesubject';

@Component({
  selector: 'app-homesubject',
  imports: [],
  templateUrl: './homesubject.html',
  styleUrl: './homesubject.css',
})
export class Homesubject implements OnInit {
  message='';

  constructor(private shared:Servicesubject){}

  ngOnInit(){
    this.shared.message$.subscribe(msg => {
      console.log("Message here:",msg);
      this.message=msg;
    });
  }
}
