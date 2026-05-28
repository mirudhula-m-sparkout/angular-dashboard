import { Routes } from '@angular/router';
import { Problem1 } from './mergewithconcat-map/problem1/problem1';
import { MergewithconcatMap } from './mergewithconcat-map/mergewithconcat-map';
export const routes: Routes = [
  {
    path: '',
    component: MergewithconcatMap ,
    children: [
      { path: 'problem1', component: Problem1 },
    ]
  }
];