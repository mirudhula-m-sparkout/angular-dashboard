import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tap1 } from './tap1';

describe('Tap1', () => {
  let component: Tap1;
  let fixture: ComponentFixture<Tap1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tap1],
    }).compileComponents();

    fixture = TestBed.createComponent(Tap1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
