import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePakageListComponent } from './manage-pakage-list.component';

describe('ManagePakageListComponent', () => {
  let component: ManagePakageListComponent;
  let fixture: ComponentFixture<ManagePakageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePakageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePakageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
