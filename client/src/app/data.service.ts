import { Injectable } from "@angular/core";
import { Project } from "./classes/project";
import { Slide } from "./classes/slide";
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";

import { DialogService } from "./dialog.service";
import { GalleryImage } from "./classes/galleryImage";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class DataService {

  constructor(private dialog: DialogService, private http: HttpClient) { }

  // These variable define the state of the app
  currentProject: Project = new Project();

  slides: Array<Slide> = this.currentProject? this.currentProject.getProperty('slides') : null;
  textStyles: Array<TextStyle> = this.currentProject? this.currentProject.getProperty('textStyles') : null;
  imageStyles: Array<ImageStyle> = this.currentProject? this.currentProject.getProperty('imageStyles') : null;

  // Toolbar variables
  selectedTextStyleId: number = this.currentProject? this.currentProject.getProperty('selectedTextStyleId') : null;
  selectedImageStyleId: number = this.currentProject? this.currentProject.getProperty('selectedImageStyleId') : null;

  // Slide editor variables
  currentSlideIndex: number = this.currentProject? this.currentProject.getProperty('currentSlideIndex') : null;
  selectedSlideObjectId: number = this.currentProject? this.currentProject.getProperty('selectedSlideObjectId') : null;

  // Sandbox variables
  sandboxText: string = this.currentProject? this.currentProject.getProperty('sandboxText') : null;
  textNotes: string = this.currentProject? this.currentProject.getProperty('textNotes') : null;
  images: GalleryImage[] = this.currentProject? this.currentProject.getProperty('images') : null;
  selectedImage: number = this.currentProject? this.currentProject.getProperty('selectedImage') : null;

  // UI Logic variables
  viewTextElements: boolean = this.currentProject? this.currentProject.getProperty('viewTextElements') : null;
  viewImageElements: boolean = this.currentProject? this.currentProject.getProperty('viewImageElements') : null;
  viewShapeElements: boolean = this.currentProject? this.currentProject.getProperty('viewShapeElements') : null;

  documentSize = this.currentProject? this.currentProject.getProperty('documentSize'): null;
  slideRenderMagnification: number = this.currentProject? this.currentProject.getProperty('slideRenderMagnification'): null;

  apiEndpoint: String = 'http://localhost:3000';

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

  loadProject(projectName) {

    console.log('dataService recieved project name.  Fetching data from server for project ' + projectName);

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', sessionStorage.getItem('currentUser'));
    headers = headers.append('project-name', projectName);

    let newProject = new Project();

    this.http.get(this.apiEndpoint + '/get-project', { headers: headers }).subscribe(res => {
      if (res['success'] === false) this.dialog.alert(res['message'], 'danger');
      let projectJsonData = JSON.stringify(res['body']);
      console.log(projectJsonData)
      this.currentProject.revive(projectJsonData);
      
      // Load project variables
        for(let key in this.currentProject){
          this[key] = this.currentProject.getProperty(key);
          console.log(this[key])
        }
        console.log(this.currentProject);
    });
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
