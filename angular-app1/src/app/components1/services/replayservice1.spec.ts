import { TestBed } from '@angular/core/testing';

import { Replayservice1 } from './replayservice1';

describe('Replayservice1', () => {
  let service: Replayservice1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Replayservice1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
