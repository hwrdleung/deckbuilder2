import { Injectable } from "@angular/core";
import { Project } from "./classes/project";
import { Slide } from "./classes/slide";
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";
import { TextObject } from "./classes/textObject";
import * as jsPDF from 'jspdf';
import * as html2canvas from "html2canvas";
import { ImageObject } from "./classes/imageObject";
import { DialogService } from "./dialog.service";
import { GalleryImage } from "./classes/galleryImage";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class DataService {

  constructor(private dialog: DialogService, private http: HttpClient) {

  }

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

  imageSearchQuery: string = "";
  imageSearchResults;

  pixabayToGallery(url: string) {
    let image = new GalleryImage();
    image.setProperty('url', url);
    image.setProperty('id', this.images.length);
    this.images.push(image);
    this.dialog.toast('Added to gallery.');
  }

  searchPixabay() {
    let url = 'https://pixabay.com/api/?'
    let apiKey = '7780146-3f3faea2d00a0e8da80a92f14';
    this.http.get(url + 'key=' + apiKey + '&q=' + this.imageSearchQuery).subscribe((res) => {
      this.imageSearchResults = res['hits'];
    });
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

  saveSession() {
    this.currentProject.setProperty('slides', this.slides);
    this.currentProject.setProperty('textStyles', this.textStyles);
    this.currentProject.setProperty('imageStyles', this.imageStyles);
    this.currentProject.setProperty('selectedTextStyleId', this.selectedTextStyleId);
    this.currentProject.setProperty('selectedImageStyleId', this.selectedImageStyleId);
    this.currentProject.setProperty('currentSlideIndex', this.currentSlideIndex);
    this.currentProject.setProperty('selectedSlideObjectId', this.selectedSlideObjectId);
    this.currentProject.setProperty('sandboxText', this.sandboxText);
    this.currentProject.setProperty('documentSize', this.documentSize);
    this.currentProject.setProperty('slideRenderMagnification', this.slideRenderMagnification);
    this.currentProject.setProperty('textNotes', this.textNotes);
    this.currentProject.setProperty('images', this.images);

    localStorage.setItem('deckbuilder2Data', JSON.stringify(this.currentProject));

    // Send to server and save to database when backend is set up

    this.dialog.alert('Your session has been saved!', 'success');
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

  selectStyle(type: string, id: number) {
    switch (type) {
      case 'text': this.selectedTextStyleId = id; break;
      case 'image': this.selectedImageStyleId = id; break;
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
    addSlides();

    function addSlides() {
      // Adds slides to jsPdf document recursively and saves when last slide has been added
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
            addSlides();
          });
        }
      }, 1000);
    }
  }

  //  STYLER FUNCTIONS
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

  deleteStyle(style: TextStyle | ImageStyle) {
    let id = style.getProperty('id');
    let styleName = style.getProperty('name');
    let styleType = style.constructor.name;

    // Remove style from project
    let confirmedDelete = () => {
      if (styleType === "TextStyle") {
        for (let i = 0; i < this.textStyles.length; i++) {
          let thisId = this.textStyles[i].getProperty('id');
          if (this.selectedTextStyleId === id) this.selectedTextStyleId = 0;
          if (thisId === id) this.textStyles.splice(i, 1);
        }
      } else if (styleType === "ImageStyle") {
        for (let i = 0; i < this.imageStyles.length; i++) {
          let thisId = this.imageStyles[i].getProperty('id');
          if (this.selectedImageStyleId === id) this.selectedImageStyleId = 0;
          if (thisId === id) this.imageStyles.splice(i, 1);
        }
      }
    }

    // If style is in use, 
    // revert slide object style id to default before removing style from project
    let revertObjectsToDefaultStyle = () => {
      for (let i = 0; i < this.slides.length; i++) {
        let thisSlideObjects = this.slides[i].getProperty('slideObjects');

        for (let j = 0; j < thisSlideObjects.length; j++) {
          let slideObjectStyleId = thisSlideObjects[j].getProperty('styleId');
          let slideObjectType = thisSlideObjects[j].constructor.name;

          switch (styleType) {
            case 'TextStyle':
              if (slideObjectType === "TextObject" && slideObjectStyleId === id) {
                thisSlideObjects[j].setProperty('styleId', 0);
              }
              break;
            case 'ImageStyle':
              if (slideObjectType === "ImageObject" && slideObjectStyleId === id) {
                thisSlideObjects[j].setProperty('styleId', 0);
              }
              break;
          }
        }
      }
    }

    switch (this.isStyleInUse(style)) {
      case true:
        // Prevent delete and display alert message
        let message = `${styleName} is currently in use.  ${styleType === 'TextStyle' ? 'Text objects' : 'Image objects'} that use this style will be reverted to the default style.  Do you wish to proceed?`;
        this.dialog.alert(message, 'danger', () => {
          revertObjectsToDefaultStyle();
          confirmedDelete();
        });
        break;

      case false:
        this.dialog.alert("Delete " + styleName + "?", 'danger', confirmedDelete);
        break;
    }
  }

  //  SANDBOX FUNCTIONS
  addTextObjectToSlide() {
    let currentSlide = this.slides[this.currentSlideIndex];
    let currentSlideObjects = currentSlide.getProperty('slideObjects');
    let newTextObject = new TextObject();

    newTextObject.setProperty('textValue', this.sandboxText);
    newTextObject.setProperty('styleId', this.selectedTextStyleId);

    // !important!  set z index after slideObject has been added to the project to ensure proper assignment of z index
    currentSlide.addSlideObject(newTextObject);
    newTextObject.setProperty('zIndex', currentSlideObjects.length - 1);
  }

  addImageObjectToSlide() {
    // Create a new ImageObject using currently selected image and currently selected ImageStyle
    let currentSlide = this.slides[this.currentSlideIndex];
    let currentSlideObjects = currentSlide.getProperty('slideObjects');
    let newImageObject = new ImageObject();
    let image = this.images[this.selectedImage].getProperty('url');

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
    newImageObject.setProperty('imagePath', image);
    newImageObject.setProperty('styleId', this.selectedImageStyleId);
    newImageObject.setProperty('height', imageHeight);
    newImageObject.setProperty('width', imageWidth);

    // imageElement is no longer needed
    imageElement = null;

    // Add to current slide
    currentSlide.addSlideObject(newImageObject);
    newImageObject.setProperty('zIndex', currentSlideObjects.length - 1);
  }

  uploadImage(event) {
    let file = event.srcElement.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      let url = (<FileReader>e.target).result;
      let image = new GalleryImage();

      image.setProperty('url', url);
      image.setProperty('id', this.images.length);
      this.images.push(image);
    }
  }

  selectImage(index) {
    this.selectedImage = index;
  }

  deleteImageById(imageId: number) {
    let callback = () => {
      for (let i = 0; i < this.images.length; i++) {
        if (this.images[i].getProperty('id') === imageId) {
          this.images.splice(i, 1);
          this.dialog.toast('Image has been deleted.');
        }
      }
    }
    this.dialog.alert("Are you sure you want to delete this image from your project?", 'danger', callback);
  }

  //  SLIDE EDITOR FUNCTIONS
  increaseOneLayer(objectId: number) {
    // Locate object in currentSlideObjects
    let currentSlide = this.slides[this.currentSlideIndex];
    let currentSlideObjects = currentSlide.getProperty('slideObjects');

    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].id === objectId && currentSlideObjects[i].zIndex < currentSlideObjects.length - 1) {
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

  decreaseOneLayer(objectId: number) {
    // Locate object in currentSlideObjects
    let currentSlide = this.slides[this.currentSlideIndex];
    let currentSlideObjects = currentSlide.getProperty('slideObjects');

    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].id === objectId && currentSlideObjects[i].zIndex > 0) {
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
