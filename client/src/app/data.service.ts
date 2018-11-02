import { Injectable } from "@angular/core";
import { Project } from "./classes/project";
import { Slide } from "./classes/slide";
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";

import { DialogService } from "./dialog.service";
import { GalleryImage } from "./classes/galleryImage";

@Injectable({
  providedIn: "root"
})

export class DataService {

  constructor(private dialog: DialogService) { }

  // These variable define the state of the app
  currentProject: Project = localStorage.getItem('deckbuilder2Data') ? this.getSavedProject(localStorage.getItem('deckbuilder2Data')) : new Project();

  slides: Array<Slide> = this.currentProject.getProperty('slides');
  textStyles: Array<TextStyle> = this.currentProject.getProperty('textStyles');
  imageStyles: Array<ImageStyle> = this.currentProject.getProperty('imageStyles');

  // Toolbar variables
  selectedTextStyleId: number = this.currentProject.getProperty('selectedTextStyleId');
  selectedImageStyleId: number = this.currentProject.getProperty('selectedImageStyleId');

  // Slide editor variables
  currentSlideIndex: number = this.currentProject.getProperty('currentSlideIndex');
  selectedSlideObjectId: number = this.currentProject.getProperty('selectedSlideObjectId');

  // Sandbox variables
  sandboxText: string = this.currentProject.getProperty('sandboxText');
  textNotes: string = this.currentProject.getProperty('textNotes');
  images: GalleryImage[] = this.currentProject.getProperty('images');
  selectedImage: number = this.currentProject.getProperty('selectedImage');

  // UI Logic variables
  viewTextElements: boolean = this.currentProject.getProperty('viewTextElements');
  viewImageElements: boolean = this.currentProject.getProperty('viewImageElements');
  viewShapeElements: boolean = this.currentProject.getProperty('viewShapeElements');

  documentSize = this.currentProject.getProperty('documentSize');
  slideRenderMagnification: number = this.currentProject.getProperty('slideRenderMagnification');

  // FUNCTIONS USED BY ALL COMPONENTS
  // App view mode:  text || image || shape
  setMode(mode: string) {
    switch (mode) {
      case "text":
        this.viewTextElements = true;
        this.viewImageElements = false;
        this.viewShapeElements = false;
        break;
      case "image":
        this.viewTextElements = false;
        this.viewImageElements = true;
        this.viewShapeElements = false;
        break;
      case "shape":
        this.viewTextElements = false;
        this.viewImageElements = false;
        this.viewShapeElements = true;
        break;
    }
  }

  getTextStyleById(id: number) {
    for (let i = 0; i < this.textStyles.length; i++) {
      if (this.textStyles[i].getProperty('id') === id) {
        return this.textStyles[i];
      }
    }
  }

  getImageStyleById(id: number) {
    for (let i = 0; i < this.imageStyles.length; i++) {
      if (this.imageStyles[i].getProperty('id') === id) {
        return this.imageStyles[i];
      }
    }
  }

  getSavedProject(jsonData) {
    let project = new Project();
    project.revive(jsonData);
    return project;
  }

  isStyleInUse = (style: TextStyle | ImageStyle) => {
    let id = style.getProperty('id');
    let styleType = style.constructor.name;
  
    // Iterate through all slideOjects in all slides
    // Return true if style is in use
    for (let i = 0; i < this.slides.length; i++) {
      let thisSlideObjects = this.slides[i].getProperty('slideObjects');
  
      for (let j = 0; j < thisSlideObjects.length; j++) {
        let slideObjectStyleId = thisSlideObjects[j].getProperty('styleId');
        let slideObjectType = thisSlideObjects[j].constructor.name;
  
        if (slideObjectStyleId === id) {
          switch (styleType) {
            case 'TextStyle':
              if (slideObjectType === "TextObject") return true;
              break;
            case 'ImageStyle':
              if (slideObjectType === "ImageObject") return true;
              break;
          }
        }
      }
    }
    return false;
  }


}
