import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenisDeMesaComponent } from './tenis-de-mesa.component';

describe('TenisDeMesaComponent', () => {
  let component: TenisDeMesaComponent;
  let fixture: ComponentFixture<TenisDeMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenisDeMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenisDeMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
