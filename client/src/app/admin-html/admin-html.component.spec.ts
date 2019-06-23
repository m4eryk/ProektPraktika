import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHtmlComponent } from './admin-html.component';

describe('AdminHtmlComponent', () => {
  let component: AdminHtmlComponent;
  let fixture: ComponentFixture<AdminHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
