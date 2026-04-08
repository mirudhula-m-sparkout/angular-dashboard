import { Routes } from '@angular/router';
import { Problem1 } from './switchmap/problem1/problem1';
import { Switchmap } from './switchmap/switchmap/switchmap';

export const routes: Routes = [
  {
    path: '',
    component: Switchmap,
    children: [
      { path: 'problem1', component: Problem1 },
    ]
  }
];