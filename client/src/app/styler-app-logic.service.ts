import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { DialogService } from "./dialog.service";
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";
import {
  DEL_TEXTSTYLE,
  DEL_IMAGESTYLE,
  SELECT_TEXTSTYLE,
  SELECT_IMAGESTYLE
} from "./state-management/actions/projectActions";
import { Store } from "@ngrx/store";
import { ProjectState } from "./state-management/state/projectState";

@Injectable({
  providedIn: "root"
})
export class StylerAppLogicService {
  projectState = this.data.projectState;

  constructor(
    private data: DataService,
    private dialog: DialogService,
    private store: Store<ProjectState>
  ) {}

  deleteStyle = (style: TextStyle | ImageStyle) => {
    // This function prompts user for confirmation before deleting style from the project.
    // Check if style is being used by any slide objects
    let isStyleInUse = false;
    this.projectState.slides.forEach(slide => {
      slide.slideObjects.forEach(slideObject => {
        if (slideObject.style === style) isStyleInUse = true;
      });
    });

    if (!isStyleInUse) {
      // Delete and toast message
      this.confirmedDelete(style, false);
    } else if (isStyleInUse) {
      // Prompt for confirmation
      let type: string;
      if (style.constructor.name === "TextStyle") type = "text";
      if (style.constructor.name === "ImageStyle") type = "image";
      let message =
        style.name +
        " is currently being used in one or more slides.  Deleting it will cause all " +
        type +
        " objects using this style to revert to the default style.  Do you wish to proceed?";
      this.dialog.alert(message, "danger", () =>
        this.confirmedDelete(style, isStyleInUse)
      );
    }
  };

  confirmedDelete = (style: TextStyle | ImageStyle, isStyleInUse: boolean) => {
    // If slideObjects are currently using this style and the user confirms deletion,
    // then those slideObjects' styles will revert to the default style.
    let styleType = style.constructor.name;

    if (isStyleInUse) {
      // Find all slide objects that use this style, and set its style to the default style
      this.projectState.slides.forEach(slide => {
        slide.slideObjects.forEach(slideObject => {
          if (slideObject.style === style) {
            switch (styleType) {
              case "TextStyle":
                slideObject.style = this.projectState.textStyles[0];
                break;
              case "ImageStyle":
                slideObject.style = this.projectState.imageStyles[0];
                break;
            }
          }
        });
      });
    }

    // Delete from project state
    switch (styleType) {
      case "TextStyle":
        // Check selectedTextStyle
        if (this.projectState.selectedTextStyle === style) {
          this.store.dispatch({
            type: SELECT_TEXTSTYLE,
            payload: { textStyle: this.projectState.textStyles[0] }
          });
        }
        this.store.dispatch({
          type: DEL_TEXTSTYLE,
          payload: { textStyle: style }
        });
        break;
      case "ImageStyle":
        // Check selectedImageStyle
        if (this.projectState.selectedImageStyle === style) {
          this.store.dispatch({
            type: SELECT_IMAGESTYLE,
            payload: { imageStyle: this.projectState.imageStyles[0] }
          });
        }
        this.store.dispatch({
          type: DEL_IMAGESTYLE,
          payload: { imageStyle: style }
        });
        break;
    }

    // Display toast message
    let message = style.name + " has been deleted.";
    this.dialog.toast(message);
  };
}
