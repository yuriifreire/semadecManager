import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XadrezComponent } from './xadrez.component';

describe('XadrezComponent', () => {
  let component: XadrezComponent;
  let fixture: ComponentFixture<XadrezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XadrezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XadrezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
