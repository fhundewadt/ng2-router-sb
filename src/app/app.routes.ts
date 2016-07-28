import { provideRouter, RouterConfig } from '@angular/router';

import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';

import { HEROES_ROUTES } from './heroes/heroes.routes';
import { CRISIS_CENTER_ROUTES } from './crisis-center/crisis-center.routes';
import { LOGIN_ROUTES, AUTH_PROVIDERS } from './login/login.routes';
import { PRODUCTS_ROUTES } from "./products/products.routes";
import { HOME_ROUTE } from "./home/home.route";


const routes:RouterConfig = [
  ...HOME_ROUTE,
  ...HEROES_ROUTES,
  ...LOGIN_ROUTES,
  ...CRISIS_CENTER_ROUTES,
  ...PRODUCTS_ROUTES,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS,
  CanDeactivateGuard,
];
