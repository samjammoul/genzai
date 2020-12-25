import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { DeviceActionTypes } from '../store/actions/device.actions';
import * as deviceActions from './actions/device.actions';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { DeviceService } from '../service/device.service';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private deviceService: DeviceService
  ) {}

  @Effect()
  loadDevices$: Observable<any> = this.actions$.pipe(
    ofType<deviceActions.LoadDevices>(
      deviceActions.DeviceActionTypes.LoadDevices
    ),

    // map((action: deviceActions.LoadDevices) => action.payload),

    mergeMap(() =>
      this.deviceService.loadDevices().pipe(
        map((text) => new deviceActions.LoadDevicesSuccess(text)),
        catchError((err) => {
          return of(new deviceActions.LoadDevicesFailure(err));
        })
      )
    )
  );
}
