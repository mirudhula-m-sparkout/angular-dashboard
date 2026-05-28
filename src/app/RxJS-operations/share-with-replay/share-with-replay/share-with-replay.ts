import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user-service';

@Component({
  selector: 'app-share-with-replay',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './share-with-replay.html',
  styleUrls: ['./share-with-replay.css']
})
export class ShareWithReplay {

  constructor(public service: UserService) {}

  share1: any;
  share2: any;

  replay1: any;
  replay2: any;

  runShare() {
    this.service.getUserShare().subscribe(d => this.share1 = d);

    setTimeout(() => {
      this.service.getUserShare().subscribe(d => this.share2 = d);
    }, 3000);
  }

  runReplay() {
    this.service.getUserReplay().subscribe(d => this.replay1 = d);

    setTimeout(() => {
      this.service.getUserReplay().subscribe(d => this.replay2 = d);
    }, 3000);
  }
}