import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPriceMarkupManagementComponent } from './listing-price-markup-management.component';

describe('ListingPriceMarkupManagementComponent', () => {
  let component: ListingPriceMarkupManagementComponent;
  let fixture: ComponentFixture<ListingPriceMarkupManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingPriceMarkupManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPriceMarkupManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
