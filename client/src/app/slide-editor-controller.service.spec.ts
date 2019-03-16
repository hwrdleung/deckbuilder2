import { TestBed, inject } from '@angular/core/testing';

import { SlideEditorController } from './slide-editor-controller.service';

describe('SlideEditorController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideEditorController]
    });
  });

  it('should be created', inject([SlideEditorController], (service: SlideEditorController) => {
    expect(service).toBeTruthy();
  }));
});
