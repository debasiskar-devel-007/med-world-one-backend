import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMedicalpartnersComponent } from './add-edit-medicalpartners.component';

describe('AddEditMedicalpartnersComponent', () => {
  let component: AddEditMedicalpartnersComponent;
  let fixture: ComponentFixture<AddEditMedicalpartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditMedicalpartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditMedicalpartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
