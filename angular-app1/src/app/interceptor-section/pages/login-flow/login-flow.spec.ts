import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFlow } from './login-flow';

describe('LoginFlow', () => {
  let component: LoginFlow;
  let fixture: ComponentFixture<LoginFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
