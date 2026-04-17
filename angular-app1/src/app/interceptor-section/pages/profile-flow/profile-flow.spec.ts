import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFlow } from './profile-flow';

describe('ProfileFlow', () => {
  let component: ProfileFlow;
  let fixture: ComponentFixture<ProfileFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
