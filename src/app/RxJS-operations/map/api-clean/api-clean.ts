import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs';
@Component({
  selector: 'app-api-clean',
  imports: [CommonModule],
  templateUrl: './api-clean.html',
  styleUrl: './api-clean.css',
})
export class ApiClean {
  
 result: string[] = [];

  ngOnInit() {
    of([
      { name: 'Alice', active: true },
      { name: 'Bob', active: false },
      { name: 'Charlie', active: true }
    ])
      .pipe(map(arr => arr.filter(u => u.active).map(u => u.name)))
      .subscribe(val => this.result = val); 
  }


}
