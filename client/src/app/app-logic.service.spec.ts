import { TestBed, inject } from '@angular/core/testing';

import { AppLogicService } from './app-logic.service';

describe('AppLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLogicService]
    });
  });

  it('should be created', inject([AppLogicService], (service: AppLogicService) => {
    expect(service).toBeTruthy();
  }));
});
