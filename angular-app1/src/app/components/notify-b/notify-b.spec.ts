import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyB } from './notify-b';

describe('NotifyB', () => {
  let component: NotifyB;
  let fixture: ComponentFixture<NotifyB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifyB],
    }).compileComponents();

    fixture = TestBed.createComponent(NotifyB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
