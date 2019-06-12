import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteComponent } from './fortnite.component';

describe('FortniteComponent', () => {
  let component: FortniteComponent;
  let fixture: ComponentFixture<FortniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
