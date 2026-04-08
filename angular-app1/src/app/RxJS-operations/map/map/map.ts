import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-map',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {}
