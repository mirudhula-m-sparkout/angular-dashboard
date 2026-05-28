import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiClean } from './api-clean';

describe('ApiClean', () => {
  let component: ApiClean;
  let fixture: ComponentFixture<ApiClean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiClean],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiClean);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
