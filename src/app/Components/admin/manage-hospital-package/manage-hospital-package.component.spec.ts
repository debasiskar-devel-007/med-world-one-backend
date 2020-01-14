import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHospitalPackageComponent } from './manage-hospital-package.component';

describe('ManageHospitalPackageComponent', () => {
  let component: ManageHospitalPackageComponent;
  let fixture: ComponentFixture<ManageHospitalPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHospitalPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHospitalPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
