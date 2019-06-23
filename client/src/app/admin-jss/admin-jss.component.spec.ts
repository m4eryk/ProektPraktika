import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJssComponent } from './admin-jss.component';

describe('AdminJssComponent', () => {
  let component: AdminJssComponent;
  let fixture: ComponentFixture<AdminJssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
