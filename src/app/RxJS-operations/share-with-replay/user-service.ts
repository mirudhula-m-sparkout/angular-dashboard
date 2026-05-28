import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  shareCount = 0;
  replayCount = 0;

  constructor(private http: HttpClient) {}

  getUserShare() {
    this.shareCount++;   // track calls

    return this.http.get(this.apiUrl).pipe(
      share()
    );
  }

  getUserReplay() {
    this.replayCount++;   // track calls

    return this.http.get(this.apiUrl).pipe(
      shareReplay(1)
    );
  }
}