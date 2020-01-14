import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartentListComponent } from './departent-list.component';

describe('DepartentListComponent', () => {
  let component: DepartentListComponent;
  let fixture: ComponentFixture<DepartentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
