import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interceptor',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './interceptor.html',
  styleUrl: './interceptor.css',
})
export class Interceptor {}
