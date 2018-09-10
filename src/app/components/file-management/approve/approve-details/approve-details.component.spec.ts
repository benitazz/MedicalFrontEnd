import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDetailsComponent } from './approve-details.component';

describe('ApproveDetailsComponent', () => {
  let component: ApproveDetailsComponent;
  let fixture: ComponentFixture<ApproveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
