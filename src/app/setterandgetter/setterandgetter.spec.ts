import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setterandgetter } from './setterandgetter';

describe('Setterandgetter', () => {
  let component: Setterandgetter;
  let fixture: ComponentFixture<Setterandgetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setterandgetter],
    }).compileComponents();

    fixture = TestBed.createComponent(Setterandgetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
