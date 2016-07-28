import { RouterConfig } from '@angular/router';
/**
 * Created by fh on 19-07-16.
 */
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisAdminComponent } from './crisis-admin/crisis-admin.component';
import { AuthGuard } from '../shared/auth-guard.service';
import { CanDeactivateGuard } from '../shared/can-deactivate-guard.service';

export const CRISIS_CENTER_ROUTES:RouterConfig = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'admin',
        component: CrisisAdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: CrisisDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: CrisisListComponent
      }
    ]
  }
];
