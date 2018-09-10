import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsBusyComponent } from './is-busy.component';

describe('IsBusyComponent', () => {
  let component: IsBusyComponent;
  let fixture: ComponentFixture<IsBusyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsBusyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsBusyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
