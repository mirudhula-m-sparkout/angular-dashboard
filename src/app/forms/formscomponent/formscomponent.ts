import { Component } from '@angular/core';
import{RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-formscomponent',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './formscomponent.html',
  styleUrl: './formscomponent.css',
})
export class Formscomponent {}
