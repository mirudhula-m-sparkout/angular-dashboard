import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperations } from './rxjs-operations';

describe('RxjsOperations', () => {
  let component: RxjsOperations;
  let fixture: ComponentFixture<RxjsOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsOperations],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsOperations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
