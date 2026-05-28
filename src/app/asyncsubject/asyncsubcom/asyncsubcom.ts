import { Component } from '@angular/core';
import { Score } from '../score/score';
import { Quiz } from '../quiz/quiz';
@Component({
  selector: 'app-asyncsubcom',
  imports: [Score,
    Quiz
  ],
  templateUrl: './asyncsubcom.html',
  styleUrl: './asyncsubcom.css',
})
export class Asyncsubcom {
}


