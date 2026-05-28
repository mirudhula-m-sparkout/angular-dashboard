import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareWithReplay1 } from './share-with-replay1';

describe('ShareWithReplay1', () => {
  let component: ShareWithReplay1;
  let fixture: ComponentFixture<ShareWithReplay1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareWithReplay1],
    }).compileComponents();

    fixture = TestBed.createComponent(ShareWithReplay1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
