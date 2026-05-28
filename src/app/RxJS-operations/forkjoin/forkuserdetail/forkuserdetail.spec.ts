import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forkuserdetail } from './forkuserdetail';

describe('Forkuserdetail', () => {
  let component: Forkuserdetail;
  let fixture: ComponentFixture<Forkuserdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forkuserdetail],
    }).compileComponents();

    fixture = TestBed.createComponent(Forkuserdetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
