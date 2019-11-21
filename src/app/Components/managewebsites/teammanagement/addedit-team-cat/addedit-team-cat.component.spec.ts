import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditTeamCatComponent } from './addedit-team-cat.component';

describe('AddeditTeamCatComponent', () => {
  let component: AddeditTeamCatComponent;
  let fixture: ComponentFixture<AddeditTeamCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditTeamCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditTeamCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
