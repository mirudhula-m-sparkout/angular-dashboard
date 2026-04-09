import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forkapidata } from './forkapidata';

describe('Forkapidata', () => {
  let component: Forkapidata;
  let fixture: ComponentFixture<Forkapidata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forkapidata],
    }).compileComponents();

    fixture = TestBed.createComponent(Forkapidata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
