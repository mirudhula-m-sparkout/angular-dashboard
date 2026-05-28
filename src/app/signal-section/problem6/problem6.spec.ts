import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem6 } from './problem6';

describe('Problem6', () => {
  let component: Problem6;
  let fixture: ComponentFixture<Problem6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem6],
    }).compileComponents();

    fixture = TestBed.createComponent(Problem6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
