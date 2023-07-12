import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Salon3v3Component } from './salon3v3.component';

describe('Salon3v3Component', () => {
  let component: Salon3v3Component;
  let fixture: ComponentFixture<Salon3v3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Salon3v3Component]
    });
    fixture = TestBed.createComponent(Salon3v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
