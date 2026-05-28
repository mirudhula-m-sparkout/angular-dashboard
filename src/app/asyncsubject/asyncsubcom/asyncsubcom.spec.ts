import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asyncsubcom } from './asyncsubcom';

describe('Asyncsubcom', () => {
  let component: Asyncsubcom;
  let fixture: ComponentFixture<Asyncsubcom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asyncsubcom],
    }).compileComponents();

    fixture = TestBed.createComponent(Asyncsubcom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
