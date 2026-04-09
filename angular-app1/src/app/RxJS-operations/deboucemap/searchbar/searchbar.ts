
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