import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paymentsub } from './paymentsub';

describe('Paymentsub', () => {
  let component: Paymentsub;
  let fixture: ComponentFixture<Paymentsub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paymentsub],
    }).compileComponents();

    fixture = TestBed.createComponent(Paymentsub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
