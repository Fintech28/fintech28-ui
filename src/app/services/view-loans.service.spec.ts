import { TestBed } from '@angular/core/testing';

import { ViewLoansService } from './view-loans.service';

describe('ViewLoansService', () => {
  let service: ViewLoansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewLoansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
