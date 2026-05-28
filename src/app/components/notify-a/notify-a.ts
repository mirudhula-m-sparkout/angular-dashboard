import { Component } from '@angular/core';
import { Notificatio } from '../../services/notification';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-notify-a',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], 
  templateUrl: './notify-a.html',
  styleUrl: './notify-a.css',
})
export class NotifyA {

  list: string[] = [];

  constructor(private notify: Notificatio) {}

  ngOnInit() {
    this.notify.stream$.subscribe(msg => {
      this.list.push(msg);
    });
  }

  send() {
    this.notify.push('A: Message sent');
  }
}