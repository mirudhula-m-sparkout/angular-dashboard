import { Component, OnInit } from '@angular/core';
import { Fakeapiservice } from '../../services/fakeapiservice';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile-flow',
  imports: [
    CommonModule
  ],
  templateUrl: './profile-flow.html',
  styleUrl: './profile-flow.css',
})
export class ProfileFlow implements OnInit {

  profile: any;

  constructor(private api: Fakeapiservice) {}

  ngOnInit(): void {
    this.api.getProfile().subscribe(res => {
      console.log('Profile Api hitted:', res);
      this.profile = res;
    });
  }
}


