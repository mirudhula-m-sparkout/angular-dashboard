import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autosaveform } from './autosaveform';

describe('Autosaveform', () => {
  let component: Autosaveform;
  let fixture: ComponentFixture<Autosaveform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autosaveform],
    }).compileComponents();

    fixture = TestBed.createComponent(Autosaveform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
