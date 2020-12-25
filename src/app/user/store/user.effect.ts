import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from '../service/user.service';
import { Observable, of } from 'rxjs';
import * as userActions from './user.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RegistrationForm } from '../../core/authentication/Store/auth';
import * as authActions from '../../core/authentication/Store/auth.action';

@Injectable()
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  getInfo$: Observable<any> = this.actions$.pipe(
    ofType<userActions.GetUserInfo>(
      userActions.UserActionTypes.Get_User_information
    ),
    mergeMap(() =>
      this.userService.getUserInfo().pipe(
        map((text) => new userActions.GetUserInfoSuccess()),
        catchError((err) => {
          return of(new userActions.GetUserInfoFail());
        })
      )
    )
  );

  @Effect()
  updateInfo$: Observable<any> = this.actions$.pipe(
    ofType<userActions.UpdateUserInfo>(
      userActions.UserActionTypes.Update_User_information
    ),
    // map((action: userActions.UpdateUserInfo) => action.payload),
    mergeMap(() =>
      this.userService.updateUserInfo().pipe(
        map((text) => new userActions.UpdateUserInfoSuccess()),
        catchError((err) => {
          return of(new userActions.UpdateUserInfoFail());
        })
      )
    )
  );
}
