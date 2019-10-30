import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingMedicalpartnersComponent } from './listing-medicalpartners.component';

describe('ListingMedicalpartnersComponent', () => {
  let component: ListingMedicalpartnersComponent;
  let fixture: ComponentFixture<ListingMedicalpartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingMedicalpartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingMedicalpartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
