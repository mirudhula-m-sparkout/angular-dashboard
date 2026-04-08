import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap,concatMap,delay } from 'rxjs';
@Component({
  selector: 'app-problem1',
  imports: [
    CommonModule
  ],
  templateUrl: './problem1.html',
  styleUrl: './problem1.css',
})
export class Problem1 {
  logs: string[] = [];
  files = ['file1.png', 'file2.mp4', 'file3.doc'];

  constructor(private ngZone: NgZone) {} // Inject NgZone

  getRandomDelay() {
    return Math.floor(Math.random() * 3000) + 500;
  }

  uploadWithMergeMap() {
    this.logs = [];
    of(...this.files)
      .pipe(
        mergeMap(file => of(`${file} uploaded`).pipe(delay(this.getRandomDelay())))
      )
      .subscribe(result => {
        // Run inside Angular zone to trigger change detection
        this.ngZone.run(() => {
          this.logs = [...this.logs, `mergeMap: ${result}`];
        });
      });
  }

  uploadWithConcatMap() {
    this.logs = [];
    of(...this.files)
      .pipe(
        concatMap(file => of(`${file} uploaded`).pipe(delay(this.getRandomDelay())))
      )
      .subscribe(result => {
        this.ngZone.run(() => {
          this.logs = [...this.logs, `concatMap: ${result}`];
        });
      });
  }
}
