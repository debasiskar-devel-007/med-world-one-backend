import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasecomparisoncartComponent } from './purchasecomparisoncart.component';

describe('PurchasecomparisoncartComponent', () => {
  let component: PurchasecomparisoncartComponent;
  let fixture: ComponentFixture<PurchasecomparisoncartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasecomparisoncartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasecomparisoncartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
