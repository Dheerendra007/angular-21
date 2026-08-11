import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productsapi } from './productsapi';

describe('Productsapi', () => {
  let component: Productsapi;
  let fixture: ComponentFixture<Productsapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productsapi],
    }).compileComponents();

    fixture = TestBed.createComponent(Productsapi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
