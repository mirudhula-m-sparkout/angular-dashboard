import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deboucemap } from './deboucemap';

describe('Deboucemap', () => {
  let component: Deboucemap;
  let fixture: ComponentFixture<Deboucemap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deboucemap],
    }).compileComponents();

    fixture = TestBed.createComponent(Deboucemap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
