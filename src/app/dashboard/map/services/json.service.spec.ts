import { TestBed } from '@angular/core/testing';

import { JsonService } from './json.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('JsonService', () => {
  let service: JsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(JsonService);
  });
});
