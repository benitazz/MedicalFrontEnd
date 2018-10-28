import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffItemComponent } from './tariff-item.component';

describe('TariffItemComponent', () => {
  let component: TariffItemComponent;
  let fixture: ComponentFixture<TariffItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
