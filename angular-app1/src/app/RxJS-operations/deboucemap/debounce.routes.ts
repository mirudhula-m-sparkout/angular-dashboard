import { Routes } from '@angular/router';
import { Deboucemap } from './deboucemap/deboucemap';
import { Searchbar } from './searchbar/searchbar';
import { Autosaveform } from './autosaveform/autosaveform';

export const routes: Routes = [
  {
    path: '',
    component: Deboucemap,
    children: [
      { path: 'searchbar', component: Searchbar },
       { path: 'autosaveform', component: Autosaveform},
    ]
  }
];