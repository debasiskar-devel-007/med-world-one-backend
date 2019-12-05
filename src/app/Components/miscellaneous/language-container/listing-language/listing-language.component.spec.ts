import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingLanguageComponent } from './listing-language.component';

describe('ListingLanguageComponent', () => {
  let component: ListingLanguageComponent;
  let fixture: ComponentFixture<ListingLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
