import { TestBed } from '@angular/core/testing';

import { CheckfirstGuard } from './checkfirst.guard';

describe('CheckfirstGuard', () => {
  let guard: CheckfirstGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckfirstGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
