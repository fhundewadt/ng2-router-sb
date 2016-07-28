import { RouterConfig } from '@angular/router';

/**
 * Created by fh on 20-07-16.
 */
import { LoginComponent } from './login.component';
import { AuthService } from '../shared/auth.service';
import { AuthGuard } from '../shared/auth-guard.service';


export const LOGIN_ROUTES: RouterConfig =[
  {path: 'login', component: LoginComponent}
];
export const AUTH_PROVIDERS = [AuthGuard, AuthService];
