import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeWidthComponent } from './tree-width.component';

describe('TreeWidthComponent', () => {
  let component: TreeWidthComponent;
  let fixture: ComponentFixture<TreeWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
