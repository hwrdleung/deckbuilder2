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
import { SlideObject } from "./classes/slideObject";
import { BorderControl } from "./classes/borderControl";
import { ShadowControl } from "./classes/shadowControl";

@Injectable({
  providedIn: "root"
})
export class DataService {


  // These variable define the state of the app
  currentProject: Project = localStorage.getItem('deckbuilder2Data') ? this.getSavedProject() : this.loadNewProject();
  // currentProject: Project = new Project();

  slides: Array<Slide> = this.currentProject.getProjectProperty('slides');
  textStyles: Array<TextStyle> = this.currentProject.getProjectProperty('textStyles');
  imageStyles: Array<ImageStyle> = this.currentProject.getProjectProperty('imageStyles');
  shapeStyles: Array<ShapeStyle> = this.currentProject.getProjectProperty('shapeStyles');

  // Toolbar variables
  selectedTextStyleId: number = this.currentProject.getProjectProperty('selectedTextStyleId');
  selectedImageStyleId: number = this.currentProject.getProjectProperty('selectedImageStyleId');
  selectedShapeStyleId: number = this.currentProject.getProjectProperty('selectedShapeStyleId');

  // Slide editor variables
  currentSlideIndex: number = this.currentProject.getProjectProperty('currentSlideIndex');
  selectedSlideObjectId: number = this.currentProject.getProjectProperty('selectedSlideObjectId');

  // Sandbox variables
  sandboxText: string = this.currentProject.getProjectProperty('sandboxText');
  textNotes: string = this.currentProject.getProjectProperty('textNotes');
  images = this.currentProject.getProjectProperty('images');
  selectedImage: number = this.currentProject.getProjectProperty('selectedImage');

  // UI Logic variables
  viewTextElements: boolean = this.currentProject.getProjectProperty('viewTextElements');
  viewImageElements: boolean  = this.currentProject.getProjectProperty('viewImageElements');
  viewShapeElements: boolean  = this.currentProject.getProjectProperty('viewShapeElements');

  documentSize: object  = this.currentProject.getProjectProperty('documentSize');
  slideRenderMagnification: number = this.currentProject.getProjectProperty('slideRenderMagnification');

  constructor(private http: HttpClient) {

  }

  test() {
    console.log("Test");

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

  loadNewProject(){
    let project = new Project();

    project.addTextStyle(new TextStyle());
    project.addImageStyle(new ImageStyle());
    project.addSlide(new Slide());

    return project;
  }

  getSavedProject () {
    let savedProjectData = JSON.parse(localStorage.getItem('deckbuilder2Data'));

    let project = new Project();
    project.revive(savedProjectData);

    // Revive Slides
    let slides = [];

    for(let i = 0; i < savedProjectData.slides.length; i++){
      let slide = new Slide();
      slide.revive(savedProjectData.slides[i]);

      let slideObjects = [];

      for(let j = 0; j < savedProjectData.slides[i].slideObjects.length; j++){
        let currentSlideObject = savedProjectData.slides[i].slideObjects[j];
        // Revive text objects
        if(currentSlideObject.hasOwnProperty('textValue')){
          let textObject = new TextObject();
          textObject.revive(currentSlideObject);
          slideObjects.push(textObject);
        } else if(currentSlideObject.hasOwnProperty('imagePath')){
        // Revive image objects
          let imageObject = new ImageObject();
          imageObject.revive(currentSlideObject);
          slideObjects.push(imageObject);
        }

        slide.setSlideProperty('slideObjects', slideObjects);
      }
      slides.push(slide);
    }   
    
    project.setProjectProperty('slides', slides);

    // Revive text styles
    let textStyles = []; // REMEMBER TO ADD ME BACK INTO PROJECT
    for(let i = 0; i < savedProjectData.textStyles.length; i++){
      let currentTextStyle = savedProjectData.textStyles[i];
      let textStyle = new TextStyle();
      textStyle.revive(currentTextStyle);

      // Revive borders
      let border = new BorderControl();
      border.revive(currentTextStyle.border);
      textStyle.setStyleProperty('border', border);

      // Revive shadows
      let shadow = new ShadowControl();
      shadow.revive(currentTextStyle.textShadow);
      textStyle.setStyleProperty('textShadow', shadow);

      textStyles.push(textStyle);
    }

    project.setProjectProperty('textStyles', textStyles);

    // Revive image styles
    let imageStyles = [];
    for(let i = 0; i < savedProjectData.imageStyles.length; i++){
      let currentImageStyle = savedProjectData.imageStyles[i];
      let imageStyle = new ImageStyle();
      imageStyle.revive(currentImageStyle);

      // Revive borders
      let border = new BorderControl();
      border.revive(currentImageStyle.border);
      imageStyle.setStyleProperty('border', border);

      imageStyles.push(imageStyle);
    }

    project.setProjectProperty('imageStyles', imageStyles);

    return project;
  }

  saveSession() {
    console.log("Save session does not work yet");

    this.currentProject.setProjectProperty('slides', this.slides);
    this.currentProject.setProjectProperty('textStyles', this.textStyles);
    this.currentProject.setProjectProperty('imageStyles', this.imageStyles);
    this.currentProject.setProjectProperty('shapeStyles', this.shapeStyles);

    this.currentProject.setProjectProperty('selectedTextStyleId', this.selectedTextStyleId);
    this.currentProject.setProjectProperty('selectedImageStyleId', this.selectedImageStyleId);
    this.currentProject.setProjectProperty('selectedShapeStyleId', this.selectedShapeStyleId);

    this.currentProject.setProjectProperty('currentSlideIndex', this.currentSlideIndex);
    this.currentProject.setProjectProperty('selectedSlideObjectId', this.selectedSlideObjectId);

    this.currentProject.setProjectProperty('sandboxText', this.sandboxText);

    this.currentProject.setProjectProperty('documentSize', this.documentSize);
    this.currentProject.setProjectProperty('slideRenderMagnification', this.slideRenderMagnification);

    this.currentProject.setProjectProperty('textNotes', this.textNotes);
    this.currentProject.setProjectProperty('images', this.images);

    localStorage.setItem('deckbuilder2Data', JSON.stringify(this.currentProject));
    alert('Your session has been saved');

  }


  //  TOOLBAR FUNCTIONS
  createTextStyle() {
    let newTextStyle = new TextStyle();
    this.textStyles.push(newTextStyle);
  }

  createImageStyle() {
    let newImageStyle = new ImageStyle();
    this.imageStyles.push(newImageStyle);
  }

  // createShapeStyle() {
  //   let newShapeStyle = new ShapeStyle();
  //   this.shapeStyles.push(newShapeStyle);
  // }

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
      imgElement.href = imgData;
      imgElement.download = "slide.png";
      imgElement.click();
    });
  }


  exportAsPDF() {
    this.slideRenderMagnification = 100;
    this.currentSlideIndex = 0;
    let context = this;

    let slideRender = document.body.getElementsByClassName('slide-render')[0];

    // Parent container must be set to overflow: visible to capture entire canvas
    let slideEditor = document.getElementById('slide-editor');
    slideEditor.style.overflow = "visible";

      let doc = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [16, 9]
      });

      let width = doc.internal.pageSize.width;
      let height = doc.internal.pageSize.height;
    
      // To make the img output size match the pdf size, make sure that:
      // canvas output size * scale factor === pdf document size converted to px

      addPages();

    function addPages (){
      setTimeout(function(){

        console.log("this.copy", this.copy);

        if(context.currentSlideIndex === context.slides.length){
          context.currentSlideIndex = 0;
          doc.save("a4.pdf");
          slideEditor.style.overflow = "hidden";
          return;

        } else {

          console.log('saving slide ' + context.currentSlideIndex);

          html2canvas(slideRender, {
            height: 432,
            width: 768,
            scale: 2,
            allowTaint : false,
            useCORS: true
          }).then(canvas => {
            let imgData = canvas.toDataURL("image/png");
            doc.addImage(imgData, "PNG", 0, 0, width, height);

            context.currentSlideIndex += 1;

            if(context.currentSlideIndex < context.slides.length){
              doc.addPage();
            }

            addPages();
          });
        }
      }, 1000);
    }
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
        id: this.images.length
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
