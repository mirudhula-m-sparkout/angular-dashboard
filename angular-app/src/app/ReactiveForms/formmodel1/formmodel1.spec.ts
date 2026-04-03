import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formmodel1 } from './formmodel1';

describe('Formmodel1', () => {
  let component: Formmodel1;
  let fixture: ComponentFixture<Formmodel1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formmodel1],
    }).compileComponents();

    fixture = TestBed.createComponent(Formmodel1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
