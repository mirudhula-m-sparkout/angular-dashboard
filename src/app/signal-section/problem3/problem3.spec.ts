import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem3 } from './problem3';

describe('Problem3', () => {
  let component: Problem3;
  let fixture: ComponentFixture<Problem3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem3],
    }).compileComponents();

    fixture = TestBed.createComponent(Problem3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
