import { Routes } from "@angular/router";
import { Forkjoin } from "./forkjoin/forkjoin";
import { Forkapidata } from "./forkapidata/forkapidata";
import { Forkuserdetail } from "./forkuserdetail/forkuserdetail";
export const routes: Routes = [
  {
    path: '',
    component: Forkjoin,
    children: [
      { path: 'forkapidata', component: Forkapidata },
      { path:'forkuserdetail', component: Forkuserdetail}
    ]
  }
];