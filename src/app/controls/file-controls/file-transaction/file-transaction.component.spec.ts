import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTransactionComponent } from './file-transaction.component';

describe('FileTransactionComponent', () => {
  let component: FileTransactionComponent;
  let fixture: ComponentFixture<FileTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
