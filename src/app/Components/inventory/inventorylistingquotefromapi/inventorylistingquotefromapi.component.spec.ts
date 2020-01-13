import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorylistingquotefromapiComponent } from './inventorylistingquotefromapi.component';

describe('InventorylistingquotefromapiComponent', () => {
  let component: InventorylistingquotefromapiComponent;
  let fixture: ComponentFixture<InventorylistingquotefromapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorylistingquotefromapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorylistingquotefromapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
