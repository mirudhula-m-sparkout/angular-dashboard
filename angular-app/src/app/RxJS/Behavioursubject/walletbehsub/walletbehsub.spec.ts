import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Walletbehsub } from './walletbehsub';

describe('Walletbehsub', () => {
  let component: Walletbehsub;
  let fixture: ComponentFixture<Walletbehsub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Walletbehsub],
    }).compileComponents();

    fixture = TestBed.createComponent(Walletbehsub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
