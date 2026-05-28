import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergewithconcatMap } from './mergewithconcat-map';

describe('MergewithconcatMap', () => {
  let component: MergewithconcatMap;
  let fixture: ComponentFixture<MergewithconcatMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergewithconcatMap],
    }).compileComponents();

    fixture = TestBed.createComponent(MergewithconcatMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
