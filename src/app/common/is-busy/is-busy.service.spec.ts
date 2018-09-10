import { TestBed, inject } from '@angular/core/testing';

import { IsBusyService } from './is-busy.service';

describe('IsBusyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsBusyService]
    });
  });

  it('should be created', inject([IsBusyService], (service: IsBusyService) => {
    expect(service).toBeTruthy();
  }));
});
