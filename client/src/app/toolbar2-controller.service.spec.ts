import { TestBed, inject } from '@angular/core/testing';

import { Toolbar2Controller } from './toolbar2-controller.service';

describe('Toolbar2Controller', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Toolbar2Controller]
    });
  });

  it('should be created', inject([Toolbar2Controller], (service: Toolbar2Controller) => {
    expect(service).toBeTruthy();
  }));
});
