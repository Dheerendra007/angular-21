import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchstatement } from './switchstatement';

describe('Switchstatement', () => {
  let component: Switchstatement;
  let fixture: ComponentFixture<Switchstatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switchstatement],
    }).compileComponents();

    fixture = TestBed.createComponent(Switchstatement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
