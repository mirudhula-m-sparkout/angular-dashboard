import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem7 } from './problem7';

describe('Problem7', () => {
  let component: Problem7;
  let fixture: ComponentFixture<Problem7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem7],
    }).compileComponents();

    fixture = TestBed.createComponent(Problem7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
