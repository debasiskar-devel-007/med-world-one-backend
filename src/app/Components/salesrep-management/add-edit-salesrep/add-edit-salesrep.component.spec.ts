import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSalesrepComponent } from './add-edit-salesrep.component';

describe('AddEditSalesrepComponent', () => {
  let component: AddEditSalesrepComponent;
  let fixture: ComponentFixture<AddEditSalesrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSalesrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSalesrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
