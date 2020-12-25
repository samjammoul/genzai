import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import * as authActions from './auth.action';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { LoginForm, LoginRequestResults, RegistrationForm } from './auth';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  registerUser$: Observable<any> = this.actions$.pipe(
    ofType<authActions.RegisterUser>(authActions.AuthActionTypes.Register_User),

    map((action: authActions.RegisterUser) => action.payload),

    mergeMap((registerForm: RegistrationForm) =>
      this.authService.registerUser(registerForm).pipe(
        map((text) => new authActions.RegistrationSuccess()),
        catchError((err) => {
          if (err.status === 406) {
            return of(
              new authActions.RegistrationFail(
                'Please control your entered values and try again!'
              )
            );
          } else {
            return of(new authActions.RegistrationFail('Something went wrong'));
          }
        })
      )
    )
  );
  @Effect()
  loginUser$: Observable<Action> = this.actions$.pipe(
    ofType<authActions.LoginUser>(authActions.AuthActionTypes.Login_User),

    map((action: authActions.LoginUser) => action.payload),

    mergeMap((loginForm: LoginForm) =>
      this.authService.loginUser(loginForm).pipe(
        map((res: LoginRequestResults) => {
          localStorage.setItem('token', res.access_token);
          localStorage.setItem('R_token', res.refresh_token);
          this.router.navigate(['/dashboard']).then();
          return new authActions.LoginSuccess();
        }),
        catchError((err) => {
          if (err.status === 401) {
            return of(
              new authActions.LoginFail(
                'Incorrect username or password. Please check the entered value and try again.'
              )
            );
          } else {
            return of(new authActions.LoginFail('Something went wrong'));
          }
        })
      )
    )
  );

  @Effect()
  authenticateUser$ = this.actions$.pipe(
    ofType<authActions.AuthenticateUser>(
      authActions.AuthActionTypes.Authenticate_User
    ),
    map((action: authActions.AuthenticateUser) => action.payload),
    mergeMap((token: string) =>
      this.authService.authenticateUser(token).pipe(
        map(() => {
          return new authActions.AuthenticationSuccess();
        }),
        catchError((err) => {
          return of(new authActions.AuthenticationFail());
        })
      )
    )
  );
}
