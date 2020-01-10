import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseQuotesListingComponent } from './purchase-quotes-listing.component';

describe('PurchaseQuotesListingComponent', () => {
  let component: PurchaseQuotesListingComponent;
  let fixture: ComponentFixture<PurchaseQuotesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseQuotesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseQuotesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
