import { TestBed, inject } from '@angular/core/testing';

import { StylerAppLogicService } from './styler-app-logic.service';

describe('StylerAppLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StylerAppLogicService]
    });
  });

  it('should be created', inject([StylerAppLogicService], (service: StylerAppLogicService) => {
    expect(service).toBeTruthy();
  }));
});
