import { TestBed, inject } from '@angular/core/testing';

import { SandboxAppLogicService } from './sandbox-app-logic.service';

describe('SandboxAppLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SandboxAppLogicService]
    });
  });

  it('should be created', inject([SandboxAppLogicService], (service: SandboxAppLogicService) => {
    expect(service).toBeTruthy();
  }));
});
