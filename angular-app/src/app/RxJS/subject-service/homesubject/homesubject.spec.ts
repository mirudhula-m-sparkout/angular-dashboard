import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homesubject } from './homesubject';

describe('Homesubject', () => {
  let component: Homesubject;
  let fixture: ComponentFixture<Homesubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homesubject],
    }).compileComponents();

    fixture = TestBed.createComponent(Homesubject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
