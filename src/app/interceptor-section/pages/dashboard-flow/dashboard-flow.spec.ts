import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFlow } from './dashboard-flow';

describe('DashboardFlow', () => {
  let component: DashboardFlow;
  let fixture: ComponentFixture<DashboardFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
