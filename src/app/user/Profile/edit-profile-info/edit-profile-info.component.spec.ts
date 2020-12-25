import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileInfoComponent } from './edit-profile-info.component';

describe('EditProfileInfoComponent', () => {
  let component: EditProfileInfoComponent;
  let fixture: ComponentFixture<EditProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
