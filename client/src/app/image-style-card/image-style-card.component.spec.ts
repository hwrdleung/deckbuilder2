import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStyleCardComponent } from './image-style-card.component';

describe('ImageStyleCardComponent', () => {
  let component: ImageStyleCardComponent;
  let fixture: ComponentFixture<ImageStyleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageStyleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageStyleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
