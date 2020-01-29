import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistingmanagerComponent } from './addlistingmanager.component';

describe('AddlistingmanagerComponent', () => {
  let component: AddlistingmanagerComponent;
  let fixture: ComponentFixture<AddlistingmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlistingmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistingmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
