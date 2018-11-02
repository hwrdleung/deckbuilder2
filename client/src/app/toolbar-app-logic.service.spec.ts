import { TestBed, inject } from '@angular/core/testing';

import { ToolbarAppLogicService } from './toolbar-app-logic.service';

describe('ToolbarAppLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolbarAppLogicService]
    });
  });

  it('should be created', inject([ToolbarAppLogicService], (service: ToolbarAppLogicService) => {
    expect(service).toBeTruthy();
  }));
});
