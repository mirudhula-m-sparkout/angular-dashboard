import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { of } from 'rxjs';
@Component({
  selector: 'app-number-double',
  imports: [CommonModule],
  templateUrl: './number-double.html',
  styleUrl: './number-double.css',
})
export class NumberDouble {
  result: number[] = [];

  ngOnInit() {
    of(1, 2, 3)
      .pipe(map(x => x * 2))
      .subscribe(val => this.result.push(val));
}
}
