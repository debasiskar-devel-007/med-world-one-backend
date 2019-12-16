import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInventoryCatComponent } from './add-edit-inventory-cat.component';

describe('AddEditInventoryCatComponent', () => {
  let component: AddEditInventoryCatComponent;
  let fixture: ComponentFixture<AddEditInventoryCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditInventoryCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInventoryCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
