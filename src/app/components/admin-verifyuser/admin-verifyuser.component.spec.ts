import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerifyuserComponent } from './admin-verifyuser.component';

describe('AdminVerifyuserComponent', () => {
  let component: AdminVerifyuserComponent;
  let fixture: ComponentFixture<AdminVerifyuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVerifyuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVerifyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
