import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Dashboard } from './pages/dashboard/dashboard';
import { TaskList } from './pages/task-list/task-list';
import { authGuard } from './guards/auth-guard';

import { Addtask } from './pages/addtask/addtask';
import { Taskdetail } from './pages/taskdetail/taskdetail';
import { Edittask } from './pages/edittask/edittask';
import { Deletetask } from './pages/deletetask/deletetask';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },

  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'tasks', component: TaskList, canActivate: [authGuard] },
  { path: 'add-task', component: Addtask, canActivate: [authGuard] },

  { path: 'task/:id', component: Taskdetail, canActivate: [authGuard] },
  { path: 'edit-task/:id', component: Edittask, canActivate: [authGuard] },
  { path: 'delete-task/:id', component: Deletetask, canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' }
];