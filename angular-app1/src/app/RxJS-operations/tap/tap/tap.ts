import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tap',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './tap.html',
  styleUrl: './tap.css',
})
export class Tap {}
