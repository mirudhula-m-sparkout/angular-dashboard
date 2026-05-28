import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyA } from './notify-a';

describe('NotifyA', () => {
  let component: NotifyA;
  let fixture: ComponentFixture<NotifyA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifyA],
    }).compileComponents();

    fixture = TestBed.createComponent(NotifyA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
