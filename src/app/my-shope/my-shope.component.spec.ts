import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShopeComponent } from './my-shope.component';

describe('MyShopeComponent', () => {
  let component: MyShopeComponent;
  let fixture: ComponentFixture<MyShopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
