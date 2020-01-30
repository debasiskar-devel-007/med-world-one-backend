import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlistingmanagerComponent } from './listlistingmanager.component';

describe('ListlistingmanagerComponent', () => {
  let component: ListlistingmanagerComponent;
  let fixture: ComponentFixture<ListlistingmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlistingmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlistingmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
