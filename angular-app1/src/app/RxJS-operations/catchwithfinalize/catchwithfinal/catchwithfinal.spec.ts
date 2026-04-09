import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catchwithfinal } from './catchwithfinal';

describe('Catchwithfinal', () => {
  let component: Catchwithfinal;
  let fixture: ComponentFixture<Catchwithfinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catchwithfinal],
    }).compileComponents();

    fixture = TestBed.createComponent(Catchwithfinal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
