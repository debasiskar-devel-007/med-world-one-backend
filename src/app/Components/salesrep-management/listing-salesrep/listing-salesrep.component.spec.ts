import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSalesrepComponent } from './listing-salesrep.component';

describe('ListingSalesrepComponent', () => {
  let component: ListingSalesrepComponent;
  let fixture: ComponentFixture<ListingSalesrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingSalesrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSalesrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
