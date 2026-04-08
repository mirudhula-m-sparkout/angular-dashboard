import { Component, OnInit } from '@angular/core';
import { Quizservice } from '../services/quizservice';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.html',
  styleUrl: './score.css',
})
export class Score implements OnInit {

  score=0;

  constructor(private quizservice:Quizservice){}

  ngOnInit(){
    this.quizservice.score$.subscribe(finalscore =>{
      this.score=finalscore;
    });
  }
}
