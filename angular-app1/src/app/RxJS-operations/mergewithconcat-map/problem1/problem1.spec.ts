import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem1 } from './problem1';

describe('Problem1', () => {
  let component: Problem1;
  let fixture: ComponentFixture<Problem1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem1],
    }).compileComponents();

    fixture = TestBed.createComponent(Problem1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
