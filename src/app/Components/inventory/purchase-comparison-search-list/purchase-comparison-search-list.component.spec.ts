import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseComparisonSearchListComponent } from './purchase-comparison-search-list.component';

describe('PurchaseComparisonSearchListComponent', () => {
  let component: PurchaseComparisonSearchListComponent;
  let fixture: ComponentFixture<PurchaseComparisonSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseComparisonSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseComparisonSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
