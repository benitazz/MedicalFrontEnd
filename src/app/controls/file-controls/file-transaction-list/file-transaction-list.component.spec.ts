import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTransactionListComponent } from './file-transaction-list.component';

describe('FileTransactionListComponent', () => {
  let component: FileTransactionListComponent;
  let fixture: ComponentFixture<FileTransactionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTransactionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
