
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-searchbar',
  imports: [
    CommonModule
  ],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css',
})
export class Searchbar implements OnInit{
  
  //search$ -listening stream 
  /*
1. Component loads
2. ngOnInit runs (setup pipeline)
3. User types
4. search() runs
5. search$.next(value)
6. debounceTime waits
7. switchMap cancels old requests
8. API call happens
9. subscribe receives result
  */ 
  search$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.search$
    .pipe(
      debounceTime(500),
      switchMap(value =>
        this.http.get(`https://jsonplaceholder.typicode.com/posts?q=${value}`)
        )
      )
      .subscribe((res: any) => {
        console.log("Api-result:", res); 
      });
  }

  search(event: any) {
    console.log("Typing:", event.target.value);
    this.search$.next(event.target.value);
  }
}