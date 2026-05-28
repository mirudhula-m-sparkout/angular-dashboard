import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-notify-buttons',
  imports: [RouterLink,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './notify-buttons.html',
  styleUrl: './notify-buttons.css',
})
export class NotifyButtons {}
