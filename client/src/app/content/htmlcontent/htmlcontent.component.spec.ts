import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLcontentComponent } from './htmlcontent.component';

describe('HTMLcontentComponent', () => {
  let component: HTMLcontentComponent;
  let fixture: ComponentFixture<HTMLcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTMLcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
