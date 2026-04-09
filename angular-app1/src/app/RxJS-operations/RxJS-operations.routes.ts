import { Routes } from '@angular/router';
import { RxjsOperations } from './rxjs-operations/rxjs-operations';

export const routes: Routes = [
  {
    path: '',
    component: RxjsOperations,
    children: [
      {
        path: 'map',
        loadChildren: () =>
          import('./map.routes').then(m => m.routes)
      }
      ,
      {
        path: 'switchmap',
        loadChildren: () =>
          import('./switchmap.routes').then(m => m.routes)
      },
      {
        path:'mergewithconcat-map',
        loadChildren: () =>
          import('./mergewithconcat-map.routes').then(m => m.routes)
      },
      {
        path:'deboucemap',
        loadChildren: () =>
          import('./deboucemap/debounce.routes').then(m => m.routes)
      },
      {
        path:'forkjoin',
        loadChildren: () =>
          import('./forkjoin/forkjoin.routes').then(m =>m.routes)
      },
      {
        path:'tap',
        loadChildren: () =>
          import('./tap/tap.routes').then(m=> m.routes)
      },
      {
        path :'catchwithfinal',
        loadChildren: () =>
          import('./catchwithfinalize/catchwithfinal.routes').then(m=> m.routes)
      }
    ]
  }
];