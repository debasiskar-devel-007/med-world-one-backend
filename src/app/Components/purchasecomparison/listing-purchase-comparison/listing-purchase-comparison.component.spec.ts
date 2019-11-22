import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPurchaseComparisonComponent } from './listing-purchase-comparison.component';

describe('ListingPurchaseComparisonComponent', () => {
  let component: ListingPurchaseComparisonComponent;
  let fixture: ComponentFixture<ListingPurchaseComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingPurchaseComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPurchaseComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
