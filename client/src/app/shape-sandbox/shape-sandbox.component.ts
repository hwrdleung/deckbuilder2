import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HorizontalResizer } from "../classes/horizontalResizer";
import { ProjectState } from "../state-management/state/projectState";
import { DataService } from "../data.service";
import { SandboxAppLogicService } from "../sandbox-app-logic.service";
import { Store } from "@ngrx/store";
import { ShapeObject } from "../classes/shapeObject";

@Component({
  selector: 'shape-sandbox',
  templateUrl: './shape-sandbox.component.html',
  styleUrls: ['./shape-sandbox.component.css']
})
export class ShapeSandboxComponent implements OnInit {

  /*  UI LAYOUT VARIABLES  */
  @ViewChild("resizer") resizer: ElementRef<any>;
  @ViewChild("middlebar") middlebar: ElementRef<any>;
  @ViewChild("container") container: ElementRef<any>;

  previewShapeObject: ShapeObject = new ShapeObject;
  previewRenderMagnification: number = 100;

  /*  NGRX STORE SUBSCRIPTION  */
  projectStateSubscription;

  constructor( public store: Store<ProjectState>,
    public data: DataService,
    public sandbox: SandboxAppLogicService) { }

  ngOnInit() {
    this.enableResizer();
  }

  enableResizer() {
    // This function enables the draggable resizable layout
    let containerElement = this.container.nativeElement;
    let resizerElement = this.resizer.nativeElement;
    let lowerBoundElement = this.middlebar.nativeElement;
    let horizontalResizer = new HorizontalResizer(
      containerElement,
      resizerElement,
      lowerBoundElement
    );
    horizontalResizer.init();
  }

  
  zoom(direction: string) {
    // This function handles the clicking of the zoom in/ zoom out buttons in the sandbox
    let magnification = this.previewRenderMagnification;
    let increment = 10;
    let maxZoom = 300;

    switch (direction) {
      case "in":
        if (magnification > maxZoom - increment) {
          magnification = maxZoom;
        } else {
          magnification += increment;
        }
        this.previewRenderMagnification = magnification;
        break;
      case "out":
        if (magnification < increment) {
          magnification = 0;
        } else {
          magnification -= increment;
        }
        this.previewRenderMagnification = magnification;
        break;
    }
  }

}
