import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrpZoneComponent } from './brp-zone.component';

describe('BrpZoneComponent', () => {
  let component: BrpZoneComponent;
  let fixture: ComponentFixture<BrpZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrpZoneComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrpZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
