import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStyleCardComponent } from './text-style-card.component';

describe('TextStyleCardComponent', () => {
  let component: TextStyleCardComponent;
  let fixture: ComponentFixture<TextStyleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextStyleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextStyleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
