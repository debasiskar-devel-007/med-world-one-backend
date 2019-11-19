import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPriceMarkupManagementComponent } from './add-edit-price-markup-management.component';

describe('AddEditPriceMarkupManagementComponent', () => {
  let component: AddEditPriceMarkupManagementComponent;
  let fixture: ComponentFixture<AddEditPriceMarkupManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPriceMarkupManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPriceMarkupManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
