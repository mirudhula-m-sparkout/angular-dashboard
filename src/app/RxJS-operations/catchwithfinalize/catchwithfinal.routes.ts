import { Routes } from '@angular/router';
import { Catchwithfinal } from './catchwithfinal/catchwithfinal';

export const routes: Routes = [
  {
    path: '',
    component: Catchwithfinal,
    children: [
      { path: 'catchwithfinal', component: Catchwithfinal },
      
    ]
  }
];