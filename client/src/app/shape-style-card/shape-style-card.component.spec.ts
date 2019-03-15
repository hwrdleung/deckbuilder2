import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeStyleCardComponent } from './shape-style-card.component';

describe('ShapeStyleCardComponent', () => {
  let component: ShapeStyleCardComponent;
  let fixture: ComponentFixture<ShapeStyleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeStyleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeStyleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
