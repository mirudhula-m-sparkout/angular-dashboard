import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubA1 } from './sub-a1';

describe('SubA1', () => {
  let component: SubA1;
  let fixture: ComponentFixture<SubA1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubA1],
    }).compileComponents();

    fixture = TestBed.createComponent(SubA1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
