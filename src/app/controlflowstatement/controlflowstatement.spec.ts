import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Controlflowstatement } from './controlflowstatement';

describe('Controlflowstatement', () => {
  let component: Controlflowstatement;
  let fixture: ComponentFixture<Controlflowstatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Controlflowstatement],
    }).compileComponents();

    fixture = TestBed.createComponent(Controlflowstatement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
