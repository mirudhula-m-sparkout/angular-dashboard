import { Component } from '@angular/core';
import { Servicesubject } from '../servicesubject';

@Component({
  selector: 'app-navbarsubject',
  imports: [],
  templateUrl: './navbarsubject.html',
  styleUrl: './navbarsubject.css',
})
export class Navbarsubject {

  constructor(private shared :Servicesubject){}

  send(){
    this.shared.sendMessage("This is navbar");
  }


}
