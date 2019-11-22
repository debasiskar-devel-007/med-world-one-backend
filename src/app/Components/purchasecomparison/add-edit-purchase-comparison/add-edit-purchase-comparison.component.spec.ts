import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPurchaseComparisonComponent } from './add-edit-purchase-comparison.component';

describe('AddEditPurchaseComparisonComponent', () => {
  let component: AddEditPurchaseComparisonComponent;
  let fixture: ComponentFixture<AddEditPurchaseComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPurchaseComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPurchaseComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
