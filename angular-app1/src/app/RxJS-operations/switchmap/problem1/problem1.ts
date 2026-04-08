import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-problem1',
  imports: [
  ],
  templateUrl: './problem1.html',
  styleUrl: './problem1.css',
})
export class Problem1 implements AfterViewInit {

  @ViewChild('searchBox') searchBox!: ElementRef;

  data: string[] = [
    'Angular', 'React', 'Vue', 'Node', 'Express', 'MongoDB',
    'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap',
    'RxJS', 'NgRx', 'GraphQL', 'Firebase'
  ];

  fakeApi(term: string) {
    const filtered = this.data.filter(item =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    return of(filtered);
  }
  
  ngAfterViewInit() {
    fromEvent(this.searchBox.nativeElement, 'input')
      .pipe(
        switchMap((event: any) => this.fakeApi(event.target.value))
      )
      .subscribe(results => {
        const resultDiv = document.getElementById('results')!;
        resultDiv.innerHTML = results.length
          ? results.map(r => `<div>${r}</div>`).join('')
          : '<div>No results found</div>';
      });
  }
}
