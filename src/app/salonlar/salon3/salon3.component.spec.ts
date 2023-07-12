import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salon3Component } from './salon3.component';

describe('Salon3Component', () => {
  let component: Salon3Component;
  let fixture: ComponentFixture<Salon3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Salon3Component]
    });
    fixture = TestBed.createComponent(Salon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
