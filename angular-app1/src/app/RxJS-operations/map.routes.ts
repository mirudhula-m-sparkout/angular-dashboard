import { Routes } from '@angular/router';
import { Map } from './map/map/map';
import { NumberDouble } from './map/number-double/number-double';
import { Uppercase } from './map/uppercase/uppercase';
import { ApiClean } from './map/api-clean/api-clean';

export const routes: Routes = [
  {
    path: '',
    component: Map,
    children: [
      { path: 'number-double', component: NumberDouble },
      { path: 'uppercase', component: Uppercase },
      { path: 'api-clean', component: ApiClean },
      { path: '', redirectTo: 'number-double', pathMatch: 'full' }
    ]
  }
];