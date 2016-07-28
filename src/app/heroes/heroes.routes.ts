/**
 * Created by fh on 19-07-16.
 */
import { RouterConfig } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const HEROES_ROUTES:RouterConfig = [
  {path: 'heroes', component: HeroListComponent},
  {path: 'hero/:id', component: HeroDetailComponent},
];
