import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
   filters = {
    category: 'electronics',
    priceMin: 100,
    priceMax: 1000
  };
}
