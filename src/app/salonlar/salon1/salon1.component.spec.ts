import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salon1Component } from './salon1.component';

describe('Salon1Component', () => {
  let component: Salon1Component;
  let fixture: ComponentFixture<Salon1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Salon1Component]
    });
    fixture = TestBed.createComponent(Salon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
