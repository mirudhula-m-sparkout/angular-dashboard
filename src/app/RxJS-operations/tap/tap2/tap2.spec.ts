import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tap2 } from './tap2';

describe('Tap2', () => {
  let component: Tap2;
  let fixture: ComponentFixture<Tap2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tap2],
    }).compileComponents();

    fixture = TestBed.createComponent(Tap2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
