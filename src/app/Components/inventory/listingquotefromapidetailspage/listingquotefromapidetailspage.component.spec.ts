import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingquotefromapidetailspageComponent } from './listingquotefromapidetailspage.component';

describe('ListingquotefromapidetailspageComponent', () => {
  let component: ListingquotefromapidetailspageComponent;
  let fixture: ComponentFixture<ListingquotefromapidetailspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingquotefromapidetailspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingquotefromapidetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
