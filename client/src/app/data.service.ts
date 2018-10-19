import { Injectable } from "@angular/core";
import { Project } from "./classes/project";
import { Slide } from "./classes/slide";
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";
import { ShapeStyle } from "./classes/shapeStyle";
import { TextObject } from "./classes/textObject";
import * as jsPDF from 'jspdf';
import * as html2canvas from "html2canvas";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
// import { caman } from "./caman";

import { ImageObject } from "./classes/imageObject";
import { ShapeObject } from "./classes/shapeObject";

@Injectable({
  providedIn: "root"
})
export class DataService {


  // These variable define the state of the app
  currentProject: Project;
  // State variables
  slides: Array<Slide>;
  textStyles: Array<TextStyle>;
  imageStyles: Array<ImageStyle>;
  shapeStyles: Array<ShapeStyle>;

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
  textNotes: string;
  images = [];
  selectedImage: number = 0;

  // UI Logic variables
  viewTextElements: boolean;
  viewImageElements: boolean;
  viewShapeElements: boolean;

  documentSize: object;
  slideRenderMagnification: number = 50;

  constructor(private http: HttpClient) {

  }

  test() {
    console.log("Test");
    console.log(this.textStyles);
  }

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
      if (this.textStyles[i].getStyleProperty('id') === id) {
        return this.textStyles[i];
      }
    }
  }

  getImageStyleById(id: number) {
    for (let i = 0; i < this.imageStyles.length; i++) {
      if (this.imageStyles[i].getStyleProperty('id') === id) {
        return this.imageStyles[i];
      }
    }
  }

  getShapeStyleById(id: number) {
    for (let i = 0; i < this.shapeStyles.length; i++) {
      if (this.shapeStyles[i].getStyleProperty('id') === id) {
        return this.shapeStyles[i];
      }
    }
  }


  //  TOOLBAR FUNCTIONS
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

    this.documentSize = project.getProjectProperty("documentSize");
    this.slideRenderMagnification = project.getProjectProperty('slideRenderMagnification');

    this.textNotes = project.getProjectProperty('textNotes');

    this.viewTextElements = true;
    this.viewImageElements = false;
    this.viewShapeElements = false;
  }

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

  selectStyle(type: string, id: number) {
    switch (type) {
      case 'text': this.selectedTextStyleId = id; break;
      case 'image': this.selectedImageStyleId = id; break;
      case 'shape': this.selectedShapeStyleId = id; break;
    }
  }

  saveAsPng() {
    html2canvas(document.querySelector(".slide-render"), {
      height: 432,
      width: 768,
      scale: 2,
      allowTaint : true
    }).then(canvas => {
      let imgElement = document.createElement('a');
      let imgData = canvas.toDataURL("image/png");
      console.log(imgData);
      imgElement.href = imgData;
      imgElement.download = "slide.png";
      imgElement.click();
    });
  }


  exportAsPDF() {
    this.slideRenderMagnification = 100;
    setTimeout(function () {
      let doc = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [16, 9]
      });

      let width = doc.internal.pageSize.width;
      let height = doc.internal.pageSize.height;

      // To make the img output size match the pdf size, make sure that:
      // canvas output size * scale factor === pdf document size converted to px

      html2canvas(document.querySelector(".slide-render"), {
        height: 432,
        width: 768,
        scale: 2,
        allowTaint : false,
        useCORS: true
      }).then(canvas => {
        let imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 0, 0, width, height);
        doc.save("a4.pdf");
      });
    }, 3000);
  }

  saveSession() {
    console.log("Save session");
    let newProject = new Project();

    newProject.setProjectProperty('slides', this.slides);
    newProject.setProjectProperty('textStyles', this.textStyles);
    newProject.setProjectProperty('imageStyles', this.imageStyles);
    newProject.setProjectProperty('shapeStyles', this.shapeStyles);

    newProject.setProjectProperty('selectedTextStyleId', this.selectedTextStyleId);
    newProject.setProjectProperty('selectedImageStyleId', this.selectedImageStyleId);
    newProject.setProjectProperty('selectedShapeStyleId', this.selectedShapeStyleId);

    newProject.setProjectProperty('currentSlideIndex', this.currentSlideIndex);
    newProject.setProjectProperty('selectedSlideObjectId', this.selectedSlideObjectId);

    newProject.setProjectProperty('sandboxText', this.sandboxText);
    newProject.setProjectProperty('sandboxImage', this.sandboxImage);
    newProject.setProjectProperty('sandboxShape', this.sandboxShape);

    newProject.setProjectProperty('documentSize', this.documentSize);
    newProject.setProjectProperty('slideRenderMagnification', this.slideRenderMagnification);

    newProject.setProjectProperty('textNotes', this.textNotes);
    newProject.setProjectProperty('images', this.images);

    let newProjectJSON = JSON.stringify(newProject);
    localStorage.setItem('deckbuilder2Data', newProjectJSON);
    alert('Your session has been saved');

  }


  //  STYLER FUNCTIONS
  deleteTextStyleById(id: number) {
    for (let i = 0; i < this.textStyles.length; i++) {
      if (this.textStyles[i].getStyleProperty('id') === id && this.textStyles.length > 1) {
        this.textStyles.splice(i, 1);
      }
    }
  }

  deleteImageStyleById(id: number) {
    for (let i = 0; i < this.imageStyles.length; i++) {
      if (this.imageStyles[i].getStyleProperty('id') === id && this.imageStyles.length > 1) {
        this.imageStyles.splice(i, 1);

      }
    }
  }

  // deleteShapeStyleById(id: number) {
  //   for (let i = 0; i < this.shapeStyles.length; i++) {
  //     if (this.shapeStyles[i].getStyleProperty('id') === id && this.shapeStyles.length > 1) {
  //       this.shapeStyles.splice(i, 1);
  //     }
  //   }
  // }



  //  SANDBOX FUNCTIONS
  addTextObjectToSlide() {
    let currentSlide = this.slides[this.currentSlideIndex];
    let currentSlideObjects = currentSlide.getSlideProperty('slideObjects');
    let newTextObject = new TextObject();

    newTextObject.setTextvalue(this.sandboxText);
    newTextObject.setStyleId(this.selectedTextStyleId);

    // !important!  set z index last to ensure proper assignment of z index
    currentSlide.addSlideObject(newTextObject);
    newTextObject.setZIndex(currentSlideObjects.length - 1);
  }

  addImageObjectToSlide(){
    let currentSlide = this.slides[this.currentSlideIndex];
    let currentSlideObjects = currentSlide.getSlideProperty('slideObjects');
    let newImageObject = new ImageObject();

    newImageObject.setImagePath(this.images[this.selectedImage].url);
    newImageObject.setStyleId(this.selectedImageStyleId);
    console.log(newImageObject);

    currentSlide.addSlideObject(newImageObject);
    newImageObject.setZIndex(currentSlideObjects.length - 1);
  }

  uploadImage(event){
    let file = event.srcElement.files[0];
    console.log(event);
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      let url = (<FileReader>e.target).result;
      let image = {
        url: url,
        id: this.images.length;
      }
      this.images.push(image);
    }
  }

  selectImage(index){
    this.selectedImage = index;
  }

  //  SLIDE EDITOR FUNCTIONS
  increaseOneLayer(objectId: number) {
    // Locate object in currentSlideObjects
    let currentSlide = this.slides[this.currentSlideIndex];
    let currentSlideObjects = currentSlide.getSlideProperty('slideObjects');

    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].id === objectId) {
        if (currentSlideObjects[i].zIndex < currentSlideObjects.length - 1) {
          currentSlideObjects[i].zIndex++; // Increment zIndex of currentSlideObjects[i]
          currentSlideObjects[i + 1].zIndex--; // Derement zIndex of currentSlideObjects[i+1]
          // Switch positions of [i] and [i+1]
          let tempStorage = currentSlideObjects[i];
          currentSlideObjects[i] = currentSlideObjects[i + 1];
          currentSlideObjects[i + 1] = tempStorage;
          i++; // Increment i to prevent the code from entering the if statement on the next iteration
        }
      }
    }
  }

  decreaseOneLayer(objectId: number) {
    // Locate object in currentSlideObjects
    let currentSlide = this.slides[this.currentSlideIndex];
    let currentSlideObjects = currentSlide.getSlideProperty('slideObjects');

    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].id === objectId) {
        if (currentSlideObjects[i].zIndex > 0) {
          currentSlideObjects[i].zIndex--; // Increment zIndex of currentSlideObjects[i]
          currentSlideObjects[i - 1].zIndex++; // Derement zIndex of currentSlideObjects[i+1]
          // Switch positions of [i] and [i+1]
          let tempStorage = currentSlideObjects[i];
          currentSlideObjects[i] = currentSlideObjects[i - 1];
          currentSlideObjects[i - 1] = tempStorage;
        }
      }
    }
  }
}
