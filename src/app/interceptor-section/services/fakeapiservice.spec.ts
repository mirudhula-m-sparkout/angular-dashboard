import { TestBed } from '@angular/core/testing';

import { Fakeapiservice } from './fakeapiservice';

describe('Fakeapiservice', () => {
  let service: Fakeapiservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fakeapiservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
