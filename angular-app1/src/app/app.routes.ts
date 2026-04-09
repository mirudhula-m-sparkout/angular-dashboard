import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotifyButtons } from './components/notify-buttons/notify-buttons';
import { NotifyA } from './components/notify-a/notify-a';
import { NotifyB } from './components/notify-b/notify-b';
import { NotifyC } from './components/notify-c/notify-c';
import { SubA1 } from './components/sub-a1/sub-a1';
import { SubA2 } from './components/sub-a2/sub-a2';


import { ReplaySubject2 } from './components1/replay-subject2/replay-subject2';
import { Asyncsubcom } from './asyncsubject/asyncsubcom/asyncsubcom';

export const routes: Routes = [
  { path: '', component: Home },

  {
    path: 'notifications',
    component: NotifyButtons,
    children: [
      {
        path: 'a',
        component: NotifyA,
        children: [
          { path: 'sub1', component: SubA1 },
          { path: 'sub2', component: SubA2 }
        ]
      },
      { path: 'b', component: NotifyB },
      { path: 'c', component: NotifyC }
    ]
  },
  
  {path : 'replaysubject2', component:ReplaySubject2},
  {path : 'asyncsubcom', component:Asyncsubcom},

  {
    path: 'rxjsoperations',
    loadChildren: () =>
      import('./RxJS-operations/RxJS-operations.routes')
        .then(m => m.routes)
  },

  { path: '**', redirectTo: '' }
];

