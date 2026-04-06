import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbarsubject } from './navbarsubject';

describe('Navbarsubject', () => {
  let component: Navbarsubject;
  let fixture: ComponentFixture<Navbarsubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbarsubject],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbarsubject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
