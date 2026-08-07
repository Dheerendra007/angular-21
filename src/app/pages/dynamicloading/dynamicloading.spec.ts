import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicloading } from './dynamicloading';

describe('Dynamicloading', () => {
  let component: Dynamicloading;
  let fixture: ComponentFixture<Dynamicloading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamicloading],
    }).compileComponents();

    fixture = TestBed.createComponent(Dynamicloading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
