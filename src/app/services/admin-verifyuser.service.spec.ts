import { TestBed } from '@angular/core/testing';

import { AdminVerifyuserService } from './admin-verifyuser.service';

describe('AdminVerifyuserService', () => {
  let service: AdminVerifyuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminVerifyuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
