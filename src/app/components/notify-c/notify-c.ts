import { Component } from '@angular/core';
import { Notificatio } from '../../services/notification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notify-c',
  imports: [CommonModule],
  templateUrl: './notify-c.html',
  styleUrl: './notify-c.css',
})
export class NotifyC {
  list: string[] = [];

  constructor(private notify: Notificatio) {}

  ngOnInit() {
    this.notify.stream$.subscribe(msg => {
      this.list.push(msg);
    });
  }

  send() {
    this.notify.push('C: Hi');
  }
}
