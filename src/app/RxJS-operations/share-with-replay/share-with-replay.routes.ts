import { Routes } from "@angular/router";
import { ShareWithReplay1 } from "./share-with-replay1/share-with-replay1";
import { ShareWithReplay } from "./share-with-replay/share-with-replay";

export const routes: Routes = [
  {
    path: '',
    component:ShareWithReplay1,
    children: [
      { path: 'share-with-replay', component: ShareWithReplay},
    ]
  }
];