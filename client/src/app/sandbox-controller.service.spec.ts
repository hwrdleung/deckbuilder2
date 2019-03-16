import { TestBed, inject } from '@angular/core/testing';
import { SandboxController } from './sandbox-controller.service';

describe('SandboxController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SandboxController]
    });
  });

  it('should be created', inject([SandboxController], (service: SandboxController) => {
    expect(service).toBeTruthy();
  }));
});
