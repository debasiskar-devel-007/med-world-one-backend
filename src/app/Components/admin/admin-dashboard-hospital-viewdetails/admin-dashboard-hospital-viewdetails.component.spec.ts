import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardHospitalViewdetailsComponent } from './admin-dashboard-hospital-viewdetails.component';

describe('AdminDashboardHospitalViewdetailsComponent', () => {
  let component: AdminDashboardHospitalViewdetailsComponent;
  let fixture: ComponentFixture<AdminDashboardHospitalViewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardHospitalViewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardHospitalViewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
