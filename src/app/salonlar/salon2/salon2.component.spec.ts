import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salon2Component } from './salon2.component';

describe('Salon2Component', () => {
  let component: Salon2Component;
  let fixture: ComponentFixture<Salon2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Salon2Component]
    });
    fixture = TestBed.createComponent(Salon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
