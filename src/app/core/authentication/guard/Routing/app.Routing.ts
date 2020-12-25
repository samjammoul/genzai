import { LoginComponent } from '../../login/login.component';
import { RegistrationComponent } from '../../../registration/registration.component';
import { Guard } from '../guard.service';

export const coreRouters = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
