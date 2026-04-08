import { Component } from '@angular/core';
import { Quizservice } from '../services/quizservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
   questions = [
    'Q1: Angular is a framework?',
    'Q2: TypeScript is used in Angular?',
    'Q3: RxJS is Reactive?',
    'Q4: Components are building blocks?',
    'Q5: AsyncSubject sends only last value?'
  ];
  constructor(private quizservice:Quizservice){}

  correctanswer(index : number){
    this.quizservice.addScore();
    alert('2 marks added');
  }

  submit(){
    this.quizservice.submitQuiz();
  }
}
