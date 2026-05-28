import { Routes } from '@angular/router';
import { Formscomponent } from './formscomponent/formscomponent';
// import { Form1 } from './form1/form1';
// import { Form2 } from './form2/form2';

export const routes: Routes = [
  {
    path: '',
    component: Formscomponent,
    children: [
      {
        path: 'form1',
        loadComponent: () => import('./form1/form1').then(m => m.Form1)
      },
      {
        path: 'form2',
        loadComponent: () => import('./form2/form2').then(m => m.Form2)
      }
    ]
  }
];