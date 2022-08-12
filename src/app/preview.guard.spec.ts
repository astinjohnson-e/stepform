import { TestBed } from '@angular/core/testing';

import { PreviewGuard } from './preview.guard';

describe('PreviewGuard', () => {
  let guard: PreviewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreviewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
