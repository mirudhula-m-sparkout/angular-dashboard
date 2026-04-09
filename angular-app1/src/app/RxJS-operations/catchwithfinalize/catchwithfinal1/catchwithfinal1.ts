import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError, finalize } from 'rxjs';
import { of } from 'rxjs';
@Component({
  selector: 'app-catchwithfinal1',
  imports: [
    CommonModule
  ],
  templateUrl: './catchwithfinal1.html',
  styleUrl: './catchwithfinal1.css',
})
export class Catchwithfinal1 {
  loading = false;
  data: any;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  fetchContent() {
    this.loading = true;       
    this.error = null;         
    this.data = null;          

    this.http.get('https://fakestoreapi.com/products/1')
    .pipe(
      catchError(err => {
        console.error('Error:', err.message);
        this.error = 'Failed to fetch data.';
        return of(null);     
      }),
      finalize(() => {
        console.log('Spinner stopped, cleanup finished here.');
        this.loading = false;  
      }))
      .subscribe(res => {
        if (res) {
          this.data = res;     
          console.log('Data:', res);
        }
      });
  }
}
