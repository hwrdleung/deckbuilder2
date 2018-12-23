import { ActionReducer } from "@ngrx/store";
import { ProjectState, initialState } from "../state/projectState";
import {
  Actions,
  NEW_PROJECT,
  LOAD_PROJECT,
  ADD_SLIDE,
  DEL_SLIDE,
  NEXT_SLIDE,
  PREV_SLIDE,
  ADD_IMAGEOBJECT,
  ADD_TEXTOBJECT,
  DEL_SLIDEOBJECT,
  ADD_TEXTSTYLE,
  DEL_TEXTSTYLE,
  ADD_IMAGESTYLE,
  DEL_IMAGESTYLE,
  ADD_IMAGE,
  DEL_IMAGE,
  SET_SANDBOXTEXT,
  SET_MODE,
  SET_SELECTED_IMAGE_PREVIEW,
  SELECT_TEXTSTYLE,
  SELECT_IMAGESTYLE,
  SELECT_GALLERY_IMAGE,
  SELECT_SLIDEOBJECT,
  SLIDEOBJECT_LAYER_UP,
  SLIDEOBJECT_LAYER_DOWN,
} from "../actions/projectActions";
import { Slide } from "src/app/classes/slide";
import { ImageObject } from "src/app/classes/imageObject";
import { TextObject } from "src/app/classes/textObject";
import { TextStyle } from "src/app/classes/textStyle";
import { ImageStyle } from "src/app/classes/imageStyle";

export const projectReducer: ActionReducer<ProjectState> = (
  state = initialState,
  action: Actions
) => {
  /* PROJECT REDUCER HANDLES A LARGE BULK OF APP LOGIC */
  let newState = { ...state };

  switch (action.type) {
    case NEW_PROJECT:
      // Return all state variables to initial states for new project
      // (Had issues cloning an instance of intial state)
      newState.name = action.payload.name;
      newState.documentSize = action.payload.documentSize;
      newState.created = new Date();
      newState.lastSaved = new Date();

      let defaultSlide = new Slide();
      defaultSlide.isDefault = true;
      newState.slides = [defaultSlide];

      let defaultTextStyle = new TextStyle();
      defaultTextStyle.isDefault = true;
      newState.textStyles = [defaultTextStyle];
      newState.selectedTextStyle = newState.textStyles[0];

      let defaultImageStyle = new ImageStyle();
      defaultImageStyle.isDefault = true;
      newState.imageStyles = [defaultImageStyle];
      newState.selectedImageStyle = newState.imageStyles[0];
      newState.selectedImagePreview = '',

      newState.currentSlideIndex = 0;
      newState.images = [];
      newState.selectedImage = null;
      newState.viewTextElements = true;
      newState.viewImageElements = false;
      newState.sandboxText = "Lorem Ipsum";
      newState.textNotes = "Notes...";
      return newState;

    case LOAD_PROJECT:
      // Populate state variables with data from payload
      return action.payload.projectData;

    case ADD_SLIDE:
      // Add a new slide to the project
      newState.slides.push(new Slide());
      newState.currentSlideIndex = newState.slides.length - 1;
      return newState;

    case DEL_SLIDE:
      // Delete the current slide
      if (newState.slides.length > 0)
        newState.slides.splice(newState.currentSlideIndex, 1);
      if (newState.currentSlideIndex > 0) newState.currentSlideIndex--;
      return newState;

    case NEXT_SLIDE:
      // Slide navigation
      if (newState.currentSlideIndex < newState.slides.length - 1) {
        newState.currentSlideIndex++;
      }
      return newState;

    case PREV_SLIDE:
      // Slide navigation
      if (newState.currentSlideIndex > 0) {
        newState.currentSlideIndex--;
      }
      return newState;

    case ADD_IMAGEOBJECT:
      // Create a new ImageObject with selected image selected image style
      // and add it to the current slide.
        let imageObject = new ImageObject();
        imageObject.imagePath = action.payload.url;
        imageObject.fileName = action.payload.fileName;
        imageObject.style = newState.selectedImageStyle;
    
              // Scale down images that are larger than doc size
              let img = new Image();
              img.src = imageObject.imagePath;
              img.onload = () => {
                // Set imageObject height and width
                if (img.width <= newState.documentSize["width"]) {
                  imageObject.height = img.height;
                  imageObject.width = img.width;
                } else if (img.width > newState.documentSize["width"]) {
                  let ratio = img.width / img.height;
                  imageObject.width = newState.documentSize["width"];
                  imageObject.height = newState.documentSize["width"] / ratio;
                }
                img = null;
                // Add imageObject to slide
                newState.slides[newState.currentSlideIndex].slideObjects.push(
                  imageObject
                );
              };
      return newState;

    case ADD_TEXTOBJECT:
      // Create a new textObject with sandboxText and selectedTextStyle
      // and add it to the current slide.
      let textObject = new TextObject();
      textObject.style = newState.selectedTextStyle;
      textObject.textValue = newState.sandboxText;
      newState.slides[newState.currentSlideIndex].slideObjects.push(textObject);
      return newState;

    case DEL_SLIDEOBJECT:
      // If imageOjbect, delete image from firestorage

      newState.slides.forEach(slide => {
        for (let i = 0; i < slide.slideObjects.length; i++) {
          if (slide.slideObjects[i] === action.payload.slideObject)
            slide.slideObjects.splice(i, 1);
        }
      });
      return newState;

    case ADD_TEXTSTYLE:
      // Add a new textStyle to the project.
      newState.textStyles.push(new TextStyle());
      return newState;

    case DEL_TEXTSTYLE:
      // Confirmation has been handled by the component.
      // Delete the textStyle specified in the payload.
      for (let i = 0; i < newState.textStyles.length; i++) {
        if (newState.textStyles[i] === action.payload.textStyle) {
          newState.textStyles.splice(i, 1);
          break;
        }
      }
      return newState;

    case ADD_IMAGESTYLE:
      // Add a new imageStyle to the project.
      newState.imageStyles.push(new ImageStyle());
      return newState;

    case DEL_IMAGESTYLE:
      // Confirmation has been handled by the component.
      // Delete the imageStyle specified in the payload.
      for (let i = 0; i < newState.imageStyles.length; i++) {
        if (newState.imageStyles[i] === action.payload.imageStyle) {
          newState.imageStyles.splice(i, 1);
          break;
        }
      }
      return newState;

    case ADD_IMAGE:
      // Add a the galleryImage in the payload to the project
      newState.images.push(action.payload.galleryImage);
      return newState;

    case DEL_IMAGE:
      // Confirmation has been handled by the component.
      // Delete the image specified in the payload.
      // Remove image from firestorage
      for (let i = 0; i < newState.images.length; i++) {
        if (newState.images[i] === action.payload.galleryImage) {
          if(newState.selectedImage === action.payload.galleryImage) newState.selectedImage = null;
          newState.images.splice(i, 1);
          break;
        }
      }
      return newState;

    case SET_SANDBOXTEXT:
      // Update the project's sandboxText with the data in the payload.
      // This is triggered by the change event in the text sandbox text input
      newState.sandboxText = action.payload.sandboxText;
      return newState;

    case SET_MODE:
      // Switch between 'text' mode and 'image' mode for styler, toolbar, and sandbox components
      if (action.payload.mode === "text") {
        newState.viewImageElements = false;
        newState.viewTextElements = true;
      }
      if (action.payload.mode === "image") {
        newState.viewImageElements = true;
        newState.viewTextElements = false;
      }
      return newState;

    case SET_SELECTED_IMAGE_PREVIEW:
      // Set the selectedImagePreview to the dataURL provided in the payload
      newState.selectedImagePreview = action.payload.selectedImagePreview;
      return newState;

    case SELECT_TEXTSTYLE:
      // Set the project's selected textStyle to the one that is specified in the payload
      newState.selectedTextStyle = action.payload.textStyle;
      return newState;

    case SELECT_IMAGESTYLE:
      // Set the project's selected imageStyle to the one that is specified in the payload
      newState.selectedImageStyle = action.payload.imageStyle;
      return newState;

    case SELECT_GALLERY_IMAGE:
      // Set the project's selected image to the one that is specified in the payload
      newState.selectedImage = action.payload.galleryImage;
      return newState;

    case SELECT_SLIDEOBJECT:
      // Set the project's selected slide object to the one that is specified in the payload
      let thisSlide = newState.slides[newState.currentSlideIndex];
      for (let i = 0; i < thisSlide.slideObjects.length; i++) {
        if (thisSlide.slideObjects[i] === action.payload.slideObject) {
          newState.selectedSlideObjectId = action.payload.slideObject.id;
          break;
        }
      }
      return newState;

    case SLIDEOBJECT_LAYER_DOWN:
      // Find the slide object specified in the payload and switch its place with
      // the slide object in the previous index
      newState.slides.forEach(slide => {
        for (let i = 0; i < slide.slideObjects.length; i++) {
          if (slide.slideObjects[i] === action.payload.slideObject) {
            if (i > 0) {
              let temp = slide.slideObjects[i];
              slide.slideObjects[i] = slide.slideObjects[i - 1];
              slide.slideObjects[i - 1] = temp;
              break;
            }
          }
        }
      });
      return newState;

    case SLIDEOBJECT_LAYER_UP:
      // Find the slide object specified in the payload and switch its place with
      // the slide object in the next index
      newState.slides.forEach(slide => {
        for (let i = 0; i < slide.slideObjects.length; i++) {
          if (slide.slideObjects[i] === action.payload.slideObject) {
            if (i < slide.slideObjects.length - 1) {
              let temp = slide.slideObjects[i];
              slide.slideObjects[i] = slide.slideObjects[i + 1];
              slide.slideObjects[i + 1] = temp;
              break;
            }
          }
        }
      });
      return newState;

    default: {
      return newState;
    }
  }
};
