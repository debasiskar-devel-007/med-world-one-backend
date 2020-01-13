import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpackageComponent } from './adminpackage.component';

describe('AdminpackageComponent', () => {
  let component: AdminpackageComponent;
  let fixture: ComponentFixture<AdminpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
