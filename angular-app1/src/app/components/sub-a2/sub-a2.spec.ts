import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubA2 } from './sub-a2';

describe('SubA2', () => {
  let component: SubA2;
  let fixture: ComponentFixture<SubA2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubA2],
    }).compileComponents();

    fixture = TestBed.createComponent(SubA2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
