import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uppercase } from './uppercase';

describe('Uppercase', () => {
  let component: Uppercase;
  let fixture: ComponentFixture<Uppercase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uppercase],
    }).compileComponents();

    fixture = TestBed.createComponent(Uppercase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
