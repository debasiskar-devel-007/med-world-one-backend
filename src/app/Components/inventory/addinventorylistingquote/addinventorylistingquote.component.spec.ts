import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinventorylistingquoteComponent } from './addinventorylistingquote.component';

describe('AddinventorylistingquoteComponent', () => {
  let component: AddinventorylistingquoteComponent;
  let fixture: ComponentFixture<AddinventorylistingquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinventorylistingquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinventorylistingquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
