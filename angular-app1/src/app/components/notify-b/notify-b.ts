import { Component } from '@angular/core';
import { Notificatio } from '../../services/notification';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notify-b',
  imports: [CommonModule],
  templateUrl: './notify-b.html',
  styleUrl: './notify-b.css',
})
export class NotifyB {
  list: string[] = [];

  constructor(private notify: Notificatio) {}

  ngOnInit() {
    this.notify.stream$.subscribe(msg => {
      this.list.push(msg);
    });
  }
  
  send() {
    this.notify.push('B: Hello');
  }
}
