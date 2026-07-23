import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Controlflowwithloop } from './controlflowwithloop';

describe('Controlflowwithloop', () => {
  let component: Controlflowwithloop;
  let fixture: ComponentFixture<Controlflowwithloop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Controlflowwithloop],
    }).compileComponents();

    fixture = TestBed.createComponent(Controlflowwithloop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
