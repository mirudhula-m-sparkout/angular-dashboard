import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs';
@Component({
  selector: 'app-uppercase',
  imports: [CommonModule],
  templateUrl: './uppercase.html',
  styleUrl: './uppercase.css',
})
export class Uppercase implements OnInit {

  result:string[]=[];

  ngOnInit(){
    of('angular','react','vue')
    .pipe(map(x => x.toUpperCase()))
    .subscribe(val => this.result.push(val));
  }


}
