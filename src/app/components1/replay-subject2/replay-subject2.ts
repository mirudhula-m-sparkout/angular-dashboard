import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import { Notifications } from './notifications/notifications';
import { History } from './history/history';
@Component({
  selector: 'app-replay-subject2',
  imports: [CommonModule,
    Dashboard,
    Notifications,
    History
  ],
  templateUrl: './replay-subject2.html',
  styleUrl: './replay-subject2.css',
})
export class ReplaySubject2 {
  activeTab: string ='dashboard';
}
