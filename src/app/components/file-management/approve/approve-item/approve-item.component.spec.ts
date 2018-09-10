import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveItemComponent } from './approve-item.component';

describe('ApproveItemComponent', () => {
  let component: ApproveItemComponent;
  let fixture: ComponentFixture<ApproveItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
