import { Component, OnInit, ElementRef } from "@angular/core";
import { ViewChild } from "@angular/core";
import { HorizontalResizer } from "../classes/horizontalResizer";
import { Store } from "@ngrx/store";
import { ProjectState } from "../state-management/state/projectState";
import { TextStyle } from "../classes/textStyle";
import { SandboxAppLogicService } from "../sandbox-app-logic.service";
import { SET_SANDBOXTEXT } from "../state-management/actions/projectActions";
import { DataService } from "../data.service";

@Component({
  selector: "text-sandbox",
  templateUrl: "./text-sandbox.component.html",
  styleUrls: ["./text-sandbox.component.css"]
})
export class TextSandboxComponent implements OnInit {
  /*  UI LAYOUT VARIABLES */
  @ViewChild("resizer") resizer: ElementRef<any>;
  @ViewChild("middlebar") middlebar: ElementRef<any>;
  @ViewChild("container") container: ElementRef<any>;
  sandboxText: string;
  textNotes: string;
  selectedTextStyle: TextStyle;
  previewRenderMagnification: number = 100;

  /*  NGRX STORE SUBSCRIPTION  */
  projectStateSubscription;

  constructor(
    public store: Store<ProjectState>,
    public sandbox: SandboxAppLogicService,
    public data: DataService
  ) {}

  ngOnInit() {
    this.enableResizer();
    // Get UI variables from dataService
    this.projectStateSubscription = this.store
      .select("projectReducer")
      .subscribe(projectState => {
        this.sandboxText = projectState.sandboxText;
        this.selectedTextStyle = projectState.selectedTextStyle;
        this.textNotes = projectState.textNotes;
      });
  }

  ngOnDestroy() {
    this.projectStateSubscription.unsubscribe();
  }

  enableResizer() {
    // This function enables drag resizing of UI layout
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

  getPreviewRenderCss() {
    // This function provides text preview render with dynamic styling
    // based on range input value
    let css = {
      transform: `scale(${this.previewRenderMagnification / 100})`
    };
    return css;
  }

  textInput($event) {
    // This function updates the projectState when user types into the text input
    let sandboxText = $event;
    this.store.dispatch({
      type: SET_SANDBOXTEXT,
      payload: { sandboxText: sandboxText }
    });
  }

  zoom(direction: string) {
    // This function handles zooming in/out of the text preview render
    // via clicking of the zoom in/out buttons
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
