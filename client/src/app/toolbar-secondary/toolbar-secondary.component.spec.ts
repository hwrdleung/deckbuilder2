import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSecondaryComponent } from './toolbar-secondary.component';

describe('ToolbarSecondaryComponent', () => {
  let component: ToolbarSecondaryComponent;
  let fixture: ComponentFixture<ToolbarSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
