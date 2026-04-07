import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyButtons } from './notify-buttons';

describe('NotifyButtons', () => {
  let component: NotifyButtons;
  let fixture: ComponentFixture<NotifyButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifyButtons],
    }).compileComponents();

    fixture = TestBed.createComponent(NotifyButtons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
