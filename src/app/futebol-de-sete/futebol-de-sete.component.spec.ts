import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutebolDeSeteComponent } from './futebol-de-sete.component';

describe('FutebolDeSeteComponent', () => {
  let component: FutebolDeSeteComponent;
  let fixture: ComponentFixture<FutebolDeSeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutebolDeSeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutebolDeSeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
