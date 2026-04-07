import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubject2 } from './replay-subject2';

describe('ReplaySubject2', () => {
  let component: ReplaySubject2;
  let fixture: ComponentFixture<ReplaySubject2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaySubject2],
    }).compileComponents();

    fixture = TestBed.createComponent(ReplaySubject2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
