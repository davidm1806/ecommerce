import { TestBed } from '@angular/core/testing';

import { VefificationAuthService } from './vefification-auth.service';

describe('VefificationAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VefificationAuthService = TestBed.get(VefificationAuthService);
    expect(service).toBeTruthy();
  });
});
