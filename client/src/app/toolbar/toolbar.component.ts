import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DialogService } from "../dialog.service";
import { ToolbarController } from "../toolbar-controller.service";
import { Store } from "@ngrx/store";
import { ProjectState } from "../state-management/state/projectState";
import { ImageStyle } from "../classes/imageStyle";
import { TextStyle } from "../classes/textStyle";
import { Slide } from "../classes/slide";

@Component({
  selector: "toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  /*  UI LAYOUT VARIABLES */
  sessionData;
  imageStyles: ImageStyle[];
  textStyles: TextStyle[];
  viewTextElements: boolean;
  viewImageElements: boolean;
  selectedTextStyle: TextStyle;
  selectedImageStyle: ImageStyle;
  slides: Slide[];
  currentSlideIndex: number;

  /*  NGRX STORE SUBSCRIPTION  */
  projectStateSubscription;

  constructor(
    public data: DataService,
    public dialog: DialogService,
    public toolbar: ToolbarController,
    public store: Store<ProjectState>
  ) {}

  ngOnInit() {
    // Detect user session
    this.sessionData = sessionStorage.getItem("sessionData");
    // Get UI variables from store
    this.projectStateSubscription = this.store
      .select("projectReducer")
      .subscribe(projectState => {
        this.imageStyles = projectState.imageStyles;
        this.textStyles = projectState.textStyles;
        this.viewTextElements = projectState.viewTextElements;
        this.viewImageElements = projectState.viewImageElements;
        this.selectedTextStyle = projectState.selectedTextStyle;
        this.selectedImageStyle = projectState.selectedImageStyle;
        this.slides = projectState.slides;
        this.currentSlideIndex = projectState.currentSlideIndex;
      });
  }

  ngOnDestroy() {
    this.projectStateSubscription.unsubscribe();
  }

  isSelected(style: ImageStyle | TextStyle) {
    // This function provides the template with a boolean for the conditional styling
    // of the toolbar's style selector
    switch (style.type) {
      case "TextStyle":
        if (style === this.selectedTextStyle) return true;
        return false;
      case "ImageStyle":
        if (style === this.selectedImageStyle) return true;
        return false;
    }
  }
}
