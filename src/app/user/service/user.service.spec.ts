import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(UserService);
  });
});
