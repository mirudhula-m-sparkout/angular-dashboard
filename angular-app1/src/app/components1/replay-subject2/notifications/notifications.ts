import { Component } from '@angular/core';
import { ReplaySubject1 } from '../../services/replayservice1';
import { CommonModule } from '@angular/common';
import { UserData } from '../../services/replayservice1';
@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  users: UserData[] = []; 

  constructor(private replayService: ReplaySubject1) {}

  ngOnInit() {
    this.replayService.users$.subscribe(p => {
      this.users= p.slice(-3);
    });
  }
}
