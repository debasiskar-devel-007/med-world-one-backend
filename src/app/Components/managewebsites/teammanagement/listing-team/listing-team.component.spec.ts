import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTeamComponent } from './listing-team.component';

describe('ListingTeamComponent', () => {
  let component: ListingTeamComponent;
  let fixture: ComponentFixture<ListingTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
