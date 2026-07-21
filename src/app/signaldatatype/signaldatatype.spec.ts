import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signaldatatype } from './signaldatatype';

describe('Signaldatatype', () => {
  let component: Signaldatatype;
  let fixture: ComponentFixture<Signaldatatype>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signaldatatype],
    }).compileComponents();

    fixture = TestBed.createComponent(Signaldatatype);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
