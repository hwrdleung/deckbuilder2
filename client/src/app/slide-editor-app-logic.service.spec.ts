import { TestBed, inject } from '@angular/core/testing';

import { SlideEditorAppLogicService } from './slide-editor-app-logic.service';

describe('SlideEditorAppLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideEditorAppLogicService]
    });
  });

  it('should be created', inject([SlideEditorAppLogicService], (service: SlideEditorAppLogicService) => {
    expect(service).toBeTruthy();
  }));
});
