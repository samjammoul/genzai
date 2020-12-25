import { TestBed } from '@angular/core/testing';

import { DeviceService } from './device.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DeviceService', () => {
  let service: DeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(DeviceService);
  });
});
