import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveloanComponent } from './admin-approveloan.component';

describe('AdminApproveloanComponent', () => {
  let component: AdminApproveloanComponent;
  let fixture: ComponentFixture<AdminApproveloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApproveloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
