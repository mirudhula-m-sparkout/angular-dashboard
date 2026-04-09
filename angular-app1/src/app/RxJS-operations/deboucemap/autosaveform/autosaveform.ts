import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autosaveform',
  imports: [
    CommonModule
  ],
  templateUrl: './autosaveform.html',
  styleUrl: './autosaveform.css',
})


export class Autosaveform {

  noteChange$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.noteChange$
    .pipe(
      debounceTime(1000),
      switchMap(note =>
        this.saveNote(note) 
      )
      )
      .subscribe(res => {
        console.log("Note saved:", res);
      });
  }
  
  onNoteChange(event: any) {
    const note = event.target.value;
    console.log("User typing:", note);
    this.noteChange$.next(note);
  }

  saveNote(note: string) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', { note });
  }
}
