import { ActionReducer } from "@ngrx/store";
import { ProjectState, initialState } from '../state/projectState';
import { Actions, NEW_PROJECT, LOAD_PROJECT, ADD_SLIDE, DEL_SLIDE, NEXT_SLIDE, PREV_SLIDE, ADD_IMAGEOBJECT, ADD_TEXTOBJECT, DEL_SLIDEOBJECT, ADD_TEXTSTYLE, DEL_TEXTSTYLE, ADD_IMAGESTYLE, DEL_IMAGESTYLE, ADD_IMAGE, DEL_IMAGE, SET_MODE, SELECT_TEXTSTYLE, SELECT_IMAGESTYLE, SELECT_GALLERY_IMAGE, SELECT_SLIDEOBJECT, SLIDEOBJECT_LAYER_UP, SLIDEOBJECT_LAYER_DOWN } from "../actions/projectActions";
import { Slide } from "src/app/classes/slide";
import { ImageObject } from "src/app/classes/imageObject";
import { TextObject } from "src/app/classes/textObject";
import { TextStyle } from "src/app/classes/textStyle";
import { ImageStyle } from "src/app/classes/imageStyle";

export const projectReducer: ActionReducer<ProjectState> =
    (state = initialState, action: Actions) => {
        let newState = { ...state };

        switch (action.type) {
            case NEW_PROJECT:
                let newProject = {...initialState}
                newProject.name = action.payload.name;
                newProject.documentSize = action.payload.documentSize;
                return newProject;

            case LOAD_PROJECT:
                console.log(action.payload.projectData);
                return action.payload.projectData

            case ADD_SLIDE:
                newState.slides.push(new Slide);
                newState.currentSlideIndex = newState.slides.length - 1;
                return newState;

            case DEL_SLIDE:
                if(newState.slides.length > 0) newState.slides.splice(newState.currentSlideIndex, 1);
                if(newState.currentSlideIndex > 0) newState.currentSlideIndex--;
                return newState;

            case NEXT_SLIDE:
                if (newState.currentSlideIndex < newState.slides.length - 1) {
                    newState.currentSlideIndex++;
                }
                return newState;

            case PREV_SLIDE:
                if (newState.currentSlideIndex > 0) {
                    newState.currentSlideIndex--;
                }
                return newState;

            case ADD_IMAGEOBJECT:
                let imageObject = new ImageObject;
                imageObject.style = newState.selectedImageStyle;
                imageObject.imagePath = newState.selectedImage.url;
                newState.slides[newState.currentSlideIndex].slideObjects.push(imageObject);
                console.log('adding image object', imageObject);
                return newState;

            case ADD_TEXTOBJECT:
                let textObject = new TextObject;
                textObject.style = newState.selectedTextStyle;
                textObject.textValue = newState.sandboxText;
                newState.slides[newState.currentSlideIndex].slideObjects.push(textObject);
                return newState;

            case DEL_SLIDEOBJECT:
                newState.slides.forEach(slide => {
                    for(let i = 0; i < slide.slideObjects.length; i++){
                        if(slide.slideObjects[i] === action.payload.slideObject) slide.slideObjects.splice(i, 1);
                    }
                });
                return newState;

            case ADD_TEXTSTYLE:
                newState.textStyles.push(new TextStyle);
                return newState;

            case DEL_TEXTSTYLE:
                for (let i = 0; i < newState.textStyles.length; i++) {
                    if (newState.textStyles[i] === action.payload.textStyle) {
                        newState.textStyles.splice(i, 1);
                        break;
                    }
                }
                return newState;

            case ADD_IMAGESTYLE:
                newState.imageStyles.push(new ImageStyle);
                return newState;

            case DEL_IMAGESTYLE:
                for (let i = 0; i < newState.imageStyles.length; i++) {
                    if (newState.imageStyles[i] === action.payload.imageStyle) {
                        newState.imageStyles.splice(i, 1);
                        break;
                    }
                }
                return newState;

            case ADD_IMAGE:
                newState.images.push(action.payload.galleryImage);
                return newState;

            case DEL_IMAGE:
                for (let i = 0; i < newState.images.length; i++) {
                    if (newState.images[i] === action.payload.galleryImage) {
                        newState.images.splice(i, 1);
                        break;
                    }
                }
                return newState;

            case SET_MODE:
                if (action.payload.mode === 'text') {
                    newState.viewImageElements = false;
                    newState.viewTextElements = true;
                }
                if (action.payload.mode === 'image') {
                    newState.viewImageElements = true;
                    newState.viewTextElements = false;
                }
                return newState;

            case SELECT_TEXTSTYLE:
                newState.selectedTextStyle = action.payload.textStyle;

                return newState;

            case SELECT_IMAGESTYLE:
                newState.selectedImageStyle = action.payload.imageStyle;
                console.log(newState.selectedImageStyle)
                return newState;

            case SELECT_GALLERY_IMAGE:
                newState.selectedImage = action.payload.galleryImage;

                return newState;

            case SELECT_SLIDEOBJECT:
                let thisSlide = newState.slides[newState.currentSlideIndex];
                for (let i = 0; i < thisSlide.slideObjects.length; i++) {
                    if (thisSlide.slideObjects[i] === action.payload.slideObject) {
                        newState.selectedSlideObjectId = action.payload.slideObject.id;
                        break;
                    }
                }
                return newState;

            case SLIDEOBJECT_LAYER_DOWN:
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
                })
                return newState;

            case SLIDEOBJECT_LAYER_UP:
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
                })
                return newState;

            default: {
                return newState;
            }
        }
    };


