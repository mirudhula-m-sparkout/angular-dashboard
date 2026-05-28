import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Quizservice {
  
  private scoreSubject=new AsyncSubject<number>();

  score$=this.scoreSubject.asObservable();

  private score=0;
  
  addScore(){
    this.score+=2;
    this.scoreSubject.next(this.score);
  }
  
  submitQuiz(){
    this.scoreSubject.complete();
  }
}
