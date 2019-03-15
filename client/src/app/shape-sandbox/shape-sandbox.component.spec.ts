import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeSandboxComponent } from './shape-sandbox.component';

describe('ShapeSandboxComponent', () => {
  let component: ShapeSandboxComponent;
  let fixture: ComponentFixture<ShapeSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
