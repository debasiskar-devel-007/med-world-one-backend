import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTeamCatComponent } from './listing-team-cat.component';

describe('ListingTeamCatComponent', () => {
  let component: ListingTeamCatComponent;
  let fixture: ComponentFixture<ListingTeamCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingTeamCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingTeamCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
