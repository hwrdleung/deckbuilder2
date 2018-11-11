import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSandboxComponent } from './image-sandbox.component';

describe('ImageSandboxComponent', () => {
  let component: ImageSandboxComponent;
  let fixture: ComponentFixture<ImageSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
