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
import { SandboxAppLogicService } from "./sandbox-app-logic.service";

@Injectable({
  providedIn: "root"
})
export class StylerAppLogicService {
  constructor(
    private sandbox: SandboxAppLogicService,
    private data: DataService,
    private dialog: DialogService,
    private store: Store<ProjectState>
  ) {}

  deleteStyle = (style: TextStyle | ImageStyle) => {
    // This function prompts user for confirmation before deleting style from the project.
    // Check if style is being used by any slide objects
    let isStyleInUse = false;
    let type;

    if (style.constructor.name === "TextStyle") type = "text";
    if (style.constructor.name === "ImageStyle") type = "image";

    this.data
      .getProjectState()
      .then(data => {
        let projectState: any = data;
        projectState.slides.forEach(slide => {
          slide.slideObjects.forEach(slideObject => {
            if (slideObject.style === style) isStyleInUse = true;
          });
        });
      })
      .then(() => {
        if (!isStyleInUse || type === "image") {
          // Prompt user for confirmation
          let message = `Delete ${style.name}?`;
          this.dialog.alert(message, "danger", () => {
            this.confirmedDelete(style, false);
          });
        } else if (isStyleInUse && type === "text") {
          // Prompt for confirmation
          let message: string = `${
            style.name
          } is currently being used in one or more slides.  Deleting it will cause all text objects using this style to revert to the default style.  Do you wish to proceed?`;

          this.dialog.alert(message, "danger", () =>
            this.confirmedDelete(style, isStyleInUse)
          );
        }
      })
      .catch(error => console.log(error));
  };

  confirmedDelete = (style: TextStyle | ImageStyle, isStyleInUse: boolean) => {
    // If slideObjects are currently using this style and the user confirms deletion,
    // then those slideObjects' styles will revert to the default style.
    this.data
      .getProjectState()
      .then(data => {
        let projectState: any = data;
        let styleType = style.constructor.name;

        if (isStyleInUse) {
          // Find all slide objects that use this style, and set its style to the default style
          projectState.slides.forEach(slide => {
            slide.slideObjects.forEach(slideObject => {
              if (slideObject.style === style) {
                switch (styleType) {
                  case "TextStyle":
                    slideObject.style = projectState.textStyles[0];
                    break;
                  case "ImageStyle":
                    slideObject.style = projectState.imageStyles[0];
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
            if (projectState.selectedTextStyle === style) {
              this.store.dispatch({
                type: SELECT_TEXTSTYLE,
                payload: { textStyle: projectState.textStyles[0] }
              });
            }
            this.store.dispatch({
              type: DEL_TEXTSTYLE,
              payload: { textStyle: style }
            });
            break;
          case "ImageStyle":
            // Check selectedImageStyle
            if (projectState.selectedImageStyle === style) {
              this.store.dispatch({
                type: SELECT_IMAGESTYLE,
                payload: { imageStyle: projectState.imageStyles[0] }
              });
              // Refresh image preview render
              this.sandbox.renderImagePreview();
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
      })
      .catch(error => console.log(error));
  };
}
