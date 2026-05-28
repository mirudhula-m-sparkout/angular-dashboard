import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forkjoin } from './forkjoin';

describe('Forkjoin', () => {
  let component: Forkjoin;
  let fixture: ComponentFixture<Forkjoin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forkjoin],
    }).compileComponents();

    fixture = TestBed.createComponent(Forkjoin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
