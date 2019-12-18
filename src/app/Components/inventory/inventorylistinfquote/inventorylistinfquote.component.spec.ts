import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorylistinfquoteComponent } from './inventorylistinfquote.component';

describe('InventorylistinfquoteComponent', () => {
  let component: InventorylistinfquoteComponent;
  let fixture: ComponentFixture<InventorylistinfquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorylistinfquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorylistinfquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
