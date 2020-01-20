import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePakageDetailsComponent } from './manage-pakage-details.component';

describe('ManagePakageDetailsComponent', () => {
  let component: ManagePakageDetailsComponent;
  let fixture: ComponentFixture<ManagePakageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePakageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePakageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
