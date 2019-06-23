import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSScontentComponent } from './csscontent.component';

describe('CSScontentComponent', () => {
  let component: CSScontentComponent;
  let fixture: ComponentFixture<CSScontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSScontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSScontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
