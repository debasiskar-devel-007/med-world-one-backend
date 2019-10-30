import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInventoryCatComponent } from './listing-inventory-cat.component';

describe('ListingInventoryCatComponent', () => {
  let component: ListingInventoryCatComponent;
  let fixture: ComponentFixture<ListingInventoryCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingInventoryCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInventoryCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
