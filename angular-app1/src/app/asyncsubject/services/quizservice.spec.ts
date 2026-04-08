import { TestBed } from '@angular/core/testing';

import { Quizservice } from './quizservice';

describe('Quizservice', () => {
  let service: Quizservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quizservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
