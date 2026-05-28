import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem4 } from './problem4';

describe('Problem4', () => {
  let component: Problem4;
  let fixture: ComponentFixture<Problem4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem4],
    }).compileComponents();

    fixture = TestBed.createComponent(Problem4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
