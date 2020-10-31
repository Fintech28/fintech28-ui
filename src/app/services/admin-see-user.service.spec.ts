import { TestBed } from '@angular/core/testing';

import { AdminSeeUserService } from './admin-see-user.service';

describe('AdminSeeUserService', () => {
  let service: AdminSeeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSeeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
