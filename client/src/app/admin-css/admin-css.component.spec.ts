import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCssComponent } from './admin-css.component';

describe('AdminCssComponent', () => {
  let component: AdminCssComponent;
  let fixture: ComponentFixture<AdminCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
