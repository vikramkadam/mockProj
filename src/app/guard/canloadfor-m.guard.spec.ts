import { TestBed } from '@angular/core/testing';

import { CanloadforMGuard } from './canloadfor-m.guard';

describe('CanloadforMGuard', () => {
  let guard: CanloadforMGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanloadforMGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
