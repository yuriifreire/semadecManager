import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaComponent } from './fifa.component';

describe('FifaComponent', () => {
  let component: FifaComponent;
  let fixture: ComponentFixture<FifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
