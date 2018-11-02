import { TestBed, inject } from '@angular/core/testing';

import { Toolbar2AppLogicService } from './toolbar2-app-logic.service';

describe('Toolbar2AppLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Toolbar2AppLogicService]
    });
  });

  it('should be created', inject([Toolbar2AppLogicService], (service: Toolbar2AppLogicService) => {
    expect(service).toBeTruthy();
  }));
});
