import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilScanComponent } from './soil-scan.component';

describe('SoilScanComponent', () => {
  let component: SoilScanComponent;
  let fixture: ComponentFixture<SoilScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoilScanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
