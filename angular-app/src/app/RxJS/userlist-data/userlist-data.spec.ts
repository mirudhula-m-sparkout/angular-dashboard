import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistData } from './userlist-data';

describe('UserlistData', () => {
  let component: UserlistData;
  let fixture: ComponentFixture<UserlistData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserlistData],
    }).compileComponents();

    fixture = TestBed.createComponent(UserlistData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
