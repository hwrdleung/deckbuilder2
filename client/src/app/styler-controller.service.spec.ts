import { TestBed, inject } from '@angular/core/testing';

import { StylerController } from './styler-controller.service';

describe('StylerController', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StylerController]
    });
  });

  it('should be created', inject([StylerController], (service: StylerController) => {
    expect(service).toBeTruthy();
  }));
});
