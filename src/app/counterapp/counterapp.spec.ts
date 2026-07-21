import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counterapp } from './counterapp';

describe('Counterapp', () => {
  let component: Counterapp;
  let fixture: ComponentFixture<Counterapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counterapp],
    }).compileComponents();

    fixture = TestBed.createComponent(Counterapp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
