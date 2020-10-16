import { TestBed } from '@angular/core/testing';

import { AdminApproveloanService } from './admin-approveloan.service';

describe('AdminApproveloanService', () => {
  let service: AdminApproveloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminApproveloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
