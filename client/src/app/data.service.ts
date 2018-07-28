import { Injectable } from "@angular/core";
import { Project } from "./classes/project";
import { Slide } from "./classes/slide";
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";
import { ShapeStyle } from "./classes/shapeStyle";
import { TextObject } from "./classes/textObject";
import { ImageObject } from "./classes/imageObject";
import { ShapeObject } from "./classes/shapeObject";

@Injectable({
  providedIn: "root"
})
export class DataService {

  // Project variables
  currentProject: Project;
  slides: Array<Slide>;
  textStyles: Array<TextStyle>;
  imageStyles: Array<ImageStyle>;
  shapeStyles: Array<ShapeStyle>;
  format: string;

  // UI Logic variables
  viewTextElements: boolean;
  viewImageElements: boolean;
  viewShapeElements: boolean;

  // Toolbar variables
  selectedTextStyleId: number;
  selectedImageStyleId: number;
  selectedShapeStyleId: number;

  // Slide editor variables
  currentSlideIndex: number;
  selectedSlideObjectId: number;

  // Sandbox variables
  sandboxText: string;
  sandboxImage: Object;
  sandboxShape: Object;

  constructor() {
    // Set default values
    let newProject = new Project();
    this.loadProject(newProject);
  }

  test() {
    console.log("Test");
    console.log(this.selectedTextStyleId);
    console.log(this.slides);
    console.log(this.textStyles);
    console.log(this.imageStyles);
    console.log(this.shapeStyles);
    // console.log(this.getTextStyleById(this.selectedTextStyleId).getCss());
  }

  loadProject(project: Project) {
    this.slides = project.getProjectProperty("slides");
    this.textStyles = project.getProjectProperty("textStyles");
    this.imageStyles = project.getProjectProperty("imageStyles");
    this.shapeStyles = project.getProjectProperty("shapeStyles");

    this.selectedTextStyleId = project.getProjectProperty(
      "selectedTextStyleId"
    );
    this.selectedImageStyleId = project.getProjectProperty(
      "selectedImageStyleId"
    );
    this.selectedShapeStyleId = project.getProjectProperty(
      "selectedShapeStyleId"
    );

    this.currentSlideIndex = project.getProjectProperty("currentSlideIndex");
    this.selectedSlideObjectId = project.getProjectProperty(
      "selectedSlideObjectId"
    );

    this.sandboxText = project.getProjectProperty("sandboxText");
    this.sandboxImage = project.getProjectProperty("sandboxImage");
    this.sandboxShape = project.getProjectProperty("sandboxShape");

    this.format = project.getProjectProperty("format");

    this.viewTextElements = true;
    this.viewImageElements = false;
    this.viewShapeElements = false;
  }

  // App view mode
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

  // TOOLBAR FUNCTIONS
  createTextStyle() {
    let newTextStyle = new TextStyle();
    this.textStyles.push(newTextStyle);
  }

  createImageStyle() {
    let newImageStyle = new ImageStyle();
    this.imageStyles.push(newImageStyle);
  }

  createShapeStyle() {
    let newShapeStyle = new ShapeStyle();
    this.shapeStyles.push(newShapeStyle);
  }

  selectStyle(type:string, id:number){
    switch(type){
      case 'text': this.selectedTextStyleId = id; break;
      case 'image': this.selectedImageStyleId = id; break;
      case 'shape': this.selectedShapeStyleId = id; break;
    }
  }

  // General functions
  getTextStyleById(id: number){
    for(let i=0; i<this.textStyles.length; i++){
      if(this.textStyles[i].getStyleProperty('id') === id){
        return this.textStyles[i];
      }
    }
  }

  getImageStyleById(id: number){
    for(let i=0; i<this.imageStyles.length; i++){
      if(this.imageStyles[i].getStyleProperty('id') === id){
        return this.imageStyles[i];
      }
    }
  }

  getShapeStyleById(id: number){
    for(let i=0; i<this.shapeStyles.length; i++){
      if(this.shapeStyles[i].getStyleProperty('id') === id){
        return this.shapeStyles[i];
      }
    }
  }

  saveAsPNG() {
    console.log("Save as PNG");
  }

  exportAsPDF() {
    console.log("Export to PDF");
  }

  saveSession() {
    console.log("Save session");
  }

  // SANDBOX FUNCTIONS
  addObjectToSlide(type: string, styleId: number) {

    // Create a new textObject || shapeObject || imageObject with whatever data is 
    // currently stored in sandboxText || sandboxShape || sandboxImage 
    // and add it as a slide object in the current slide

    let currentSlide = this.slides[this.currentSlideIndex];

    switch (type) {
      case "text":
        let newTextObject = new TextObject();
        newTextObject.setTextvalue(this.sandboxText);
        newTextObject.setStyleId(this.selectedTextStyleId);
        currentSlide.addSlideObject(newTextObject);
        break;

      case "image":
        let newImageObject = new ImageObject();
        // TODO: ADD IMAGE OBJECT ATTRIBUTES FROM SANDBOXIMAGE
        newImageObject.setStyleId(this.selectedImageStyleId);
        currentSlide.addSlideObject(newImageObject);
        break;

      case "shape":
        let newShapeObject = new ShapeObject();
        // TODO: ADD SHAPE OBJECT ATTRIBUTES FROM SANDBOXIMAGE
        newShapeObject.setStyleId(this.selectedShapeStyleId);
        currentSlide.addSlideObject(newShapeObject);
        break;
    }
  }

  // SLIDE-EDITOR FUNCTIONS
  createNewSlide() {
    let newSlide = new Slide();
    this.slides.push(newSlide);
  }

  deleteSlideById(id) {
    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i].getSlideProperty(id) === id) {
        this.slides.splice(i, 1);
      }
    }
  }

  // STYLER FUNCTIONS
}
