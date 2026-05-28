import { Routes } from '@angular/router';
// import { Problem1 } from './problem1/problem1';
// import { Problem2 } from './problem2/problem2';
import { Problem3 } from './problem3/problem3';
import { Problem4 } from './problem4/problem4';
import { Problem5 } from './problem5/problem5';
import { Signal } from './signal/signal';



export const routes: Routes = [
  {
    path: '',
    component:  Signal,
    children: [
      // { path: 'problem1', component: Problem1 },
      // { path: 'problem2', component: Problem2 },
      { path: 'problem3', component: Problem3 },
      { path: 'problem4', component: Problem4 },
      { path: 'problem5', component: Problem5 },
      { path: '', redirectTo: 'problem', pathMatch: 'full' }
    ]
  }
];