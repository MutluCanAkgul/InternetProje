import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salon2v2Component } from './salon2v2.component';

describe('Salon2v2Component', () => {
  let component: Salon2v2Component;
  let fixture: ComponentFixture<Salon2v2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Salon2v2Component]
    });
    fixture = TestBed.createComponent(Salon2v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
