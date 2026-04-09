import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catchwithfinal1 } from './catchwithfinal1';

describe('Catchwithfinal1', () => {
  let component: Catchwithfinal1;
  let fixture: ComponentFixture<Catchwithfinal1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catchwithfinal1],
    }).compileComponents();

    fixture = TestBed.createComponent(Catchwithfinal1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
