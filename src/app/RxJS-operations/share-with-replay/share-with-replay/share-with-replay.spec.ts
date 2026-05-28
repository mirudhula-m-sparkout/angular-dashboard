import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareWithReplay } from './share-with-replay';

describe('ShareWithReplay', () => {
  let component: ShareWithReplay;
  let fixture: ComponentFixture<ShareWithReplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareWithReplay],
    }).compileComponents();

    fixture = TestBed.createComponent(ShareWithReplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
