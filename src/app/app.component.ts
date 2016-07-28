import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AuthGuard } from './shared/auth-guard.service';
import { DialogService } from './shared/dialog.service';
import { HeroService } from './heroes/shared/hero.service';
import { ProductService } from './products/shared/product.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthGuard, HeroService, DialogService, ProductService]
})
export class AppComponent {
  title = 'ROUTER SANDBOX';

  constructor() {
  }

}
