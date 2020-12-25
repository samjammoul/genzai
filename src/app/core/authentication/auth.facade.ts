import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as auth from './Store/auth.reducer';
import * as authActions from '../authentication/Store/auth.action';
import { LoginForm, RegistrationForm } from './Store/auth';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AuthFacade {
  error$ = this.store.pipe(select(auth.getError));
  registered$ = this.store.pipe(
    select(auth.getRegisterStatus),
    filter(Boolean)
  );

  constructor(private store: Store<auth.AppState>) {}

  registerUser(registerForm: RegistrationForm) {
    this.store.dispatch(new authActions.RegisterUser(registerForm));
  }

  loginUser(loginForm: LoginForm) {
    this.store.dispatch(new authActions.LoginUser(loginForm));
  }
}
