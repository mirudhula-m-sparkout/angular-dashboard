import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rxjs-operations',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './rxjs-operations.html',
  styleUrl: './rxjs-operations.css',
})
export class RxjsOperations {}
