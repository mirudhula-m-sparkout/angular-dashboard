import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem5 } from './problem5';

describe('Problem5', () => {
  let component: Problem5;
  let fixture: ComponentFixture<Problem5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem5],
    }).compileComponents();

    fixture = TestBed.createComponent(Problem5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
