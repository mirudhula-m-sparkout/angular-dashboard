import { Component, OnInit } from '@angular/core';
import { ReplaySubject1 } from '../../services/replayservice1';
import { CommonModule } from '@angular/common';
import { UserData } from '../../services/replayservice1';
@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History implements OnInit{

  users: UserData[] = []; 

  constructor(private replayService: ReplaySubject1) {}

  ngOnInit() {
    this.replayService.users$.subscribe(p => {
      this.users = p.slice(0, 3); 
    });
  }
}
