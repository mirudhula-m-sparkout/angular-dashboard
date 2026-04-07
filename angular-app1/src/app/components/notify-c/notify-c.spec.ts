import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyC } from './notify-c';

describe('NotifyC', () => {
  let component: NotifyC;
  let fixture: ComponentFixture<NotifyC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifyC],
    }).compileComponents();

    fixture = TestBed.createComponent(NotifyC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
