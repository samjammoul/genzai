import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProfileInfoComponent } from './show-profile-info.component';

describe('ShowProfileInfoComponent', () => {
  let component: ShowProfileInfoComponent;
  let fixture: ComponentFixture<ShowProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProfileInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
