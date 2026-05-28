

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

import { Interceptor } from './interceptor-section/interceptor/interceptor';
import { LoginFlow } from './interceptor-section/pages/login-flow/login-flow';
import { DashboardFlow } from './interceptor-section/pages/dashboard-flow/dashboard-flow';
import { ProfileFlow } from './interceptor-section/pages/profile-flow/profile-flow';

import { authguardGuard } from './interceptor-section/guards/authguard-guard';
import { UserComponent } from './crud/user-component/user-component';

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

  { path: 'replaysubject2', component: ReplaySubject2 },
  { path: 'asyncsubcom', component: Asyncsubcom },

  {
    path: 'rxjsoperations',
    loadChildren: () =>
      import('./RxJS-operations/RxJS-operations.routes')
        .then(m => m.routes)
  },

  {
    path: 'interceptor-section',
    component: Interceptor,
    children: [
      { path: '', redirectTo: 'login-flow', pathMatch: 'full' },

      { path: 'login-flow', component: LoginFlow },

      {
        path: 'dashboard-flow',
        component: DashboardFlow,
        canActivate: [authguardGuard]
      },

      {
        path: 'profile-flow',
        component: ProfileFlow,
        canActivate: [authguardGuard]
      }
    ]
  },

  {
    path: 'signal-section',
    loadChildren: () =>
      import('./signal-section/signal-section.routes')
        .then(m => m.routes)
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.routes')
        .then(m => m.routes)
  },
  {
    path :'user-component',
    loadComponent: () => import('./crud/user-component/user-component').then(m => m.UserComponent)
  },
  { path: '**', redirectTo: '' }
];


