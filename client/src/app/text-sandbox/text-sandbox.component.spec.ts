import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSandboxComponent } from './text-sandbox.component';

describe('TextSandboxComponent', () => {
  let component: TextSandboxComponent;
  let fixture: ComponentFixture<TextSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
