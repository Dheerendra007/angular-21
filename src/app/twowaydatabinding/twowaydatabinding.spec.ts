import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twowaydatabinding } from './twowaydatabinding';

describe('Twowaydatabinding', () => {
  let component: Twowaydatabinding;
  let fixture: ComponentFixture<Twowaydatabinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Twowaydatabinding],
    }).compileComponents();

    fixture = TestBed.createComponent(Twowaydatabinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
