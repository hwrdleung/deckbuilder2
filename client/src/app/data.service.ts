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

import { ImageObject } from "./classes/imageObject";
import { BorderControl } from "./classes/borderControl";
import { ShadowControl } from "./classes/shadowControl";
import { DialogService } from "./dialog.service";

@Injectable({
  providedIn: "root"
})

export class DataService {

  constructor(private dialog: DialogService) {

  }

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
  viewImageElements: boolean = this.currentProject.getProjectProperty('viewImageElements');
  viewShapeElements: boolean = this.currentProject.getProjectProperty('viewShapeElements');

  documentSize = this.currentProject.getProjectProperty('documentSize');
  slideRenderMagnification: number = this.currentProject.getProjectProperty('slideRenderMagnification');




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


  loadNewProject() {
    let project = new Project();

    let textStyle = new TextStyle();
    textStyle.setStyleProperty('name', 'Default Text Style');
    textStyle.setStyleProperty('isDefault', true);

    let imageStyle = new ImageStyle();
    imageStyle.setStyleProperty('name', 'Default Image Style');
    imageStyle.setStyleProperty('isDefault', true);

    project.addTextStyle(textStyle);
    project.addImageStyle(imageStyle);
    project.addSlide(new Slide());

    return project;
  }

  getSavedProject() {
    let savedProjectData = JSON.parse(localStorage.getItem('deckbuilder2Data'));
    let project = new Project();
    project.revive(savedProjectData);

    // Revive Slides
    let slides = [];

    for (let i = 0; i < savedProjectData.slides.length; i++) {
      let slide = new Slide();
      slide.revive(savedProjectData.slides[i]);

      let slideObjects = [];

      for (let j = 0; j < savedProjectData.slides[i].slideObjects.length; j++) {
        let currentSlideObject = savedProjectData.slides[i].slideObjects[j];
        // Revive text objects
        if (currentSlideObject.hasOwnProperty('textValue')) {
          let textObject = new TextObject();
          textObject.revive(currentSlideObject);
          slideObjects.push(textObject);
        } else if (currentSlideObject.hasOwnProperty('imagePath')) {
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
    for (let i = 0; i < savedProjectData.textStyles.length; i++) {
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
    for (let i = 0; i < savedProjectData.imageStyles.length; i++) {
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
    // Send to server and save to database when backend is set up

    this.dialog.alert('Your session has been saved.');

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
    // Parent container must be set to overflow: visible to capture entire canvas
    let slideEditor = document.getElementById('slide-editor');
    slideEditor.style.overflow = "visible";


    html2canvas(document.getElementById("slide-render"), {
      height: this.documentSize.height,
      width: this.documentSize.width,
      scale: 2,
      allowTaint: true
    }).then(canvas => {
      let imgElement = document.createElement('a');
      let imgData = canvas.toDataURL("image/png");
      imgElement.href = imgData;
      imgElement.download = "slide.png";
      imgElement.click();

      // Change styleEditor overflow back to original value
      slideEditor.style.overflow = "hidden";
    });
  }


  exportAsPDF() {

    let context = this;
    this.slideRenderMagnification = 100;
    this.currentSlideIndex = 0;
    let slideRender = document.getElementById('slide-render');
    let originalOverflowSR = slideRender.style.overflow;
    slideRender.style.overflow = "visible";


    // Parent container must be set to overflow: visible to capture entire canvas
    let slideRenderArea = document.getElementById('slide-render-area');
    let originalWidth = slideRenderArea.style.width;
    let originalOverflowSRA = slideRenderArea.style.overflow;
    slideRenderArea.style.width = "auto";
    slideRenderArea.style.overflow = "visible";

    let doc = new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: [16, 9]
    });

    let pdfWidth = doc.internal.pageSize.width;
    let pdfHeight = doc.internal.pageSize.height;

    // To make the img output size match the pdf size, make sure that:
    // canvas output size * scale factor === pdf document size converted to px

    addPages();

    function addPages() {
      setTimeout(function () {
        if (context.currentSlideIndex === context.slides.length) {
          context.currentSlideIndex = 0;
          doc.save("a4.pdf");

          // Change styleEditor overflow back to original value
          slideRenderArea.style.width = originalWidth;
          slideRenderArea.style.overflow = originalOverflowSRA;
          slideRender.style.overflow = originalOverflowSR;

          return;
        } else {
          html2canvas(slideRender, {
            height: context.documentSize.height,
            width: context.documentSize.width,
            scale: 2,
            allowTaint: false,
            useCORS: true
          }).then(canvas => {
            let imgData = canvas.toDataURL("image/png");
            doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

            context.currentSlideIndex += 1;

            if (context.currentSlideIndex < context.slides.length) {
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

          // Check if this style is currently being used in a slide

    for (let i = 0; i < this.textStyles.length; i++) {
      let thisTextStyleId = this.textStyles[i].getStyleProperty('id');

      // If user wants to delete a style that is currently the selected style,
      // Change selected style to default (index 0) before proceeding.
      if (id === this.selectedTextStyleId) {
        this.selectedTextStyleId = 0;
      }


      // Delete style by id
      if (thisTextStyleId === id)
        this.textStyles.splice(i, 1);
    }
  }

  deleteImageStyleById(id: number) {
    for (let i = 0; i < this.imageStyles.length; i++) {
      let thisImageStyleId = this.imageStyles[i].getStyleProperty('id');

      // If user wants to delete a style that is currently the selected style,
      // Change selected style to default (index 0) before proceeding.
      if (id === this.selectedImageStyleId) {
        this.selectedImageStyleId = 0;
      }

      // Check if this style is currently being used in a slide


      // Delete style by id
      if (thisImageStyleId === id)
        this.imageStyles.splice(i, 1);
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
    console.log(this.selectedTextStyleId)

    // !important!  set z index last to ensure proper assignment of z index
    currentSlide.addSlideObject(newTextObject);
    newTextObject.setZIndex(currentSlideObjects.length - 1);
  }

  addImageObjectToSlide() {
    // Create a new ImageObject using currently selected image and currently selected ImageStyle
    let currentSlide = this.slides[this.currentSlideIndex];
    let currentSlideObjects = currentSlide.getSlideProperty('slideObjects');
    let newImageObject = new ImageObject();
    let image = this.images[this.selectedImage].url;

    // Check if image is larger than document size
    let imageElement = new Image;
    imageElement.src = image;
    let imageWidth;
    let imageHeight;

    // Scale down if larger than document size
    if (imageElement.width > this.documentSize.width) {
      let ratio = imageElement.width / imageElement.height;
      imageWidth = this.documentSize.width;
      imageHeight = imageWidth / ratio;
    }

    // Define properties for newImageObject
    newImageObject.setImagePath(image);
    newImageObject.setStyleId(this.selectedImageStyleId);
    newImageObject.setImageObjectProperty('height', imageHeight);
    newImageObject.setImageObjectProperty('width', imageWidth);

    // imageElement is no longer needed
    imageElement = null;

    // Add to current slide
    currentSlide.addSlideObject(newImageObject);
    newImageObject.setZIndex(currentSlideObjects.length - 1);
  }

  uploadImage(event) {
    let file = event.srcElement.files[0];
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

  selectImage(index) {
    this.selectedImage = index;
  }

  deleteImageById(imageId: number) {

    let callback = () => {
      for (let i = 0; i < this.images.length; i++) {
        if (this.images[i].id === imageId) {
          this.images.splice(i, 1);
        }
      }
    }

    this.dialog.alert("Are you sure you want to delete this image from your project?", callback);

    
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
