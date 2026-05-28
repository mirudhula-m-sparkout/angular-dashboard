import { Routes } from "@angular/router";
import { Tap } from "./tap/tap";
import { Tap1 } from "./tap1/tap1";
import { Tap2 } from "./tap2/tap2";
export const routes: Routes = [
  {
    path: '',
    component: Tap,
    children: [
      { path: 'tap1', component: Tap1 },
      { path:'tap2' , component: Tap2 }
    ]
  }
];