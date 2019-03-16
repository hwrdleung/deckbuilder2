import { TestBed, inject } from '@angular/core/testing';

import { ToolbarController } from './toolbar-controller.service';

describe('ToolbarController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolbarController]
    });
  });

  it('should be created', inject([ToolbarController], (service: ToolbarController) => {
    expect(service).toBeTruthy();
  }));
});
