import { TestBed } from '@angular/core/testing';

import { CanDeactiveGuardService } from './can-deactive-guard.service';

describe('CanDeactiveGuardService', () => {
  let service: CanDeactiveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeactiveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
