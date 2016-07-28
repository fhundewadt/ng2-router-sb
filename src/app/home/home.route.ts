import { RouterConfig } from '@angular/router';

import { HomeComponent } from "./home.component";

export const HOME_ROUTE:RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];

