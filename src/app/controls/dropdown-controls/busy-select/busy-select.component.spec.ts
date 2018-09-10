import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusySelectComponent } from './busy-select.component';

describe('BusySelectComponent', () => {
  let component: BusySelectComponent;
  let fixture: ComponentFixture<BusySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
