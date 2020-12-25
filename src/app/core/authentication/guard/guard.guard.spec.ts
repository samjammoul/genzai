import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Guard } from './guard.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../Store/auth.reducer';

describe('GuardGuard', () => {
  let guard: Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Guard);
  });
});
