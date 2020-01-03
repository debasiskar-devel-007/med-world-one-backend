import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcontactinfoComponent } from './addcontactinfo.component';

describe('AddcontactinfoComponent', () => {
  let component: AddcontactinfoComponent;
  let fixture: ComponentFixture<AddcontactinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcontactinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcontactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
