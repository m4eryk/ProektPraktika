import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JScontentComponent } from './jscontent.component';

describe('JScontentComponent', () => {
  let component: JScontentComponent;
  let fixture: ComponentFixture<JScontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JScontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JScontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
