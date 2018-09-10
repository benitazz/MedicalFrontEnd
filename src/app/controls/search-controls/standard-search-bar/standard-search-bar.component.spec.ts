import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSearchBarComponent } from './standard-search-bar.component';

describe('StandardSearchBarComponent', () => {
  let component: StandardSearchBarComponent;
  let fixture: ComponentFixture<StandardSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
