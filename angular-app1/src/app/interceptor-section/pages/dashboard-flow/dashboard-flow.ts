import { Component } from '@angular/core';
import { Authservice } from '../../services/authservice';
import { CommonModule } from '@angular/common';
import { Fakeapiservice } from '../../services/fakeapiservice';

@Component({
  selector: 'app-dashboard-flow',
  imports: [CommonModule],
  templateUrl: './dashboard-flow.html',
  styleUrl: './dashboard-flow.css',
})
export class DashboardFlow {

  constructor(
    public auth: Authservice,
    private api: Fakeapiservice
  ) {}

  load() {
    
    console.log(' Dashboard API call started');

    this.api.getProfile().subscribe({
      next: (res) => {
        console.log('Dashboard received response:', res);
      },

      error: (err) => {
        console.log('Dashboard error (still caught here):', err);
      }
    });
  }

  logout() {
    console.log('Logout clicked');
    this.auth.logout();
  }
}