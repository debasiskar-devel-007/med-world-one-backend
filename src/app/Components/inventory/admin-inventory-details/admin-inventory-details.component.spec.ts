import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInventoryDetailsComponent } from './admin-inventory-details.component';

describe('AdminInventoryDetailsComponent', () => {
  let component: AdminInventoryDetailsComponent;
  let fixture: ComponentFixture<AdminInventoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInventoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInventoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
