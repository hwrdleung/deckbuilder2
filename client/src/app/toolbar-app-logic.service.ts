import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from "html2canvas";
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";

@Injectable({
  providedIn: 'root'
})
export class ToolbarAppLogicService {

  constructor(private data: DataService, private dialog: DialogService) { }

  createTextStyle() {
    let newTextStyle = new TextStyle();
    this.data.textStyles.push(newTextStyle);
  }

  createImageStyle() {
    let newImageStyle = new ImageStyle();
    this.data.imageStyles.push(newImageStyle);
  }

  selectStyle(type: string, id: number) {
    switch (type) {
      case 'text': this.data.selectedTextStyleId = id; break;
      case 'image': this.data.selectedImageStyleId = id; break;
    }
  }

  saveAsPng() {
    // Parent container must be set to overflow: visible to capture entire canvas
    let slideEditor = document.getElementById('slide-editor');
    slideEditor.style.overflow = "visible";

    html2canvas(document.getElementById("slide-render"), {
      height: this.data.documentSize.height,
      width: this.data.documentSize.width,
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
    this.data.slideRenderMagnification = 100;
    this.data.currentSlideIndex = 0;
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


    let addSlides = () => {
      // Adds slides to jsPdf document recursively and saves when last slide has been added
      setTimeout(() => {
        if (this.data.currentSlideIndex === this.data.slides.length) {
          this.data.currentSlideIndex = 0;
          doc.save("a4.pdf");

          // Change styleEditor overflow back to original value
          slideRenderArea.style.width = originalWidth;
          slideRenderArea.style.overflow = originalOverflowSRA;
          slideRender.style.overflow = originalOverflowSR;

          return;
        } else {
          html2canvas(slideRender, {
            height: this.data.documentSize.height,
            width: this.data.documentSize.width,
            scale: 2,
            allowTaint: false,
            useCORS: true
          }).then(canvas => {
            let imgData = canvas.toDataURL("image/png");
            doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

            this.data.currentSlideIndex += 1;

            if (this.data.currentSlideIndex < this.data.slides.length) {
              doc.addPage();
            }
            addSlides();
          });
        }
      }, 1000);
    }
    addSlides();
  }

  saveSession() {
    this.data.currentProject.setProperty('slides', this.data.slides);
    this.data.currentProject.setProperty('textStyles', this.data.textStyles);
    this.data.currentProject.setProperty('imageStyles', this.data.imageStyles);
    this.data.currentProject.setProperty('selectedTextStyleId', this.data.selectedTextStyleId);
    this.data.currentProject.setProperty('selectedImageStyleId', this.data.selectedImageStyleId);
    this.data.currentProject.setProperty('currentSlideIndex', this.data.currentSlideIndex);
    this.data.currentProject.setProperty('selectedSlideObjectId', this.data.selectedSlideObjectId);
    this.data.currentProject.setProperty('sandboxText', this.data.sandboxText);
    this.data.currentProject.setProperty('documentSize', this.data.documentSize);
    this.data.currentProject.setProperty('slideRenderMagnification', this.data.slideRenderMagnification);
    this.data.currentProject.setProperty('textNotes', this.data.textNotes);
    this.data.currentProject.setProperty('images', this.data.images);

    localStorage.setItem('deckbuilder2Data', JSON.stringify(this.data.currentProject));

    // Send to server and save to database when backend is set up

    this.dialog.alert('Your session has been saved!', 'success');
  }
}