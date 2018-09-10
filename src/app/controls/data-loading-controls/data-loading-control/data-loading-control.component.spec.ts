import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLoadingControlComponent } from './data-loading-control.component';

describe('DataLoadingControlComponent', () => {
  let component: DataLoadingControlComponent;
  let fixture: ComponentFixture<DataLoadingControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLoadingControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLoadingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
