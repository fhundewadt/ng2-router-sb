import { RouterConfig } from '@angular/router';

import { ProductCenterComponent } from './product-center.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { AuthGuard } from '../shared/auth-guard.service';
import { CanDeactivateGuard } from '../shared/can-deactivate-guard.service';

export const PRODUCTS_ROUTES:RouterConfig = [
  {
    path: 'products',
    component: ProductCenterComponent,
    children: [
      {
        path: 'admin',
        component: ProductAdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':rowNumber',
        component: ProductDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: ProductListComponent
      }
    ]
  }
];
