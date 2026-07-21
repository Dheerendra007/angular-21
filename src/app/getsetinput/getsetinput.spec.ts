import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getsetinput } from './getsetinput';

describe('Getsetinput', () => {
  let component: Getsetinput;
  let fixture: ComponentFixture<Getsetinput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getsetinput],
    }).compileComponents();

    fixture = TestBed.createComponent(Getsetinput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
