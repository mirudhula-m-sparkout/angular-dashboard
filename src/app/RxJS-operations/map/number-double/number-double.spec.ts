import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDouble } from './number-double';

describe('NumberDouble', () => {
  let component: NumberDouble;
  let fixture: ComponentFixture<NumberDouble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberDouble],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberDouble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
