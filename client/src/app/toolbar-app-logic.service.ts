import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from "html2canvas";
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";
import { Store } from "@ngrx/store";
import { HttpClient } from '@angular/common/http'

import { UserState } from './state-management/state/userState';
import { ProjectState } from './state-management/state/projectState';

import { ADD_TEXTSTYLE, SET_MODE, ADD_IMAGESTYLE, SELECT_TEXTSTYLE, SELECT_IMAGESTYLE, DEL_SLIDE } from './state-management/actions/projectActions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolbarAppLogicService {

  apiEndpoint:string = 'http://localhost:3000';

  constructor(private router:Router, private data: DataService, private dialog: DialogService, private store:Store<ProjectState>, private user:Store<UserState>, private http:HttpClient) { }

  dashboard(){
    this.data.saveProject();
    this.router.navigate(['dashboard']);
  }

  createTextStyle() {
    this.store.dispatch({type:ADD_TEXTSTYLE});
    this.store.dispatch({type: SET_MODE, payload: {mode: 'text'}});
  }

  createImageStyle() {
    this.store.dispatch({type:ADD_IMAGESTYLE});
    this.store.dispatch({type: SET_MODE, payload: {mode: 'image'}});
  }

  selectStyle(style: ImageStyle | TextStyle) {
    let styleType = style.constructor.name;
    switch (styleType) {
      case 'TextStyle': this.store.dispatch({type: SELECT_TEXTSTYLE, payload:{textStyle:style}}); break;
      case 'ImageStyle': this.store.dispatch({type: SELECT_IMAGESTYLE, payload:{imageStyle:style}}); break;
    }
  }

  save(){
    this.data.saveProject().then(res => {
      console.log(res);
      // let message = 'Your project has been saved!';
      // this.dialog.alert(message, 'success')
    })
  }

  

  saveAsPng() {
    // // Parent container must be set to overflow: visible to capture entire canvas
    // let slideEditor = document.getElementById('slide-editor');
    // slideEditor.style.overflow = "visible";

    // html2canvas(document.getElementById("slide-render"), {
    //   height: this.data.documentSize.height,
    //   width: this.data.documentSize.width,
    //   scale: 2,
    //   allowTaint: true
    // }).then(canvas => {
    //   let imgElement = document.createElement('a');
    //   let imgData = canvas.toDataURL("image/png");
    //   imgElement.href = imgData;
    //   imgElement.download = "slide.png";
    //   imgElement.click();

    //   // Change styleEditor overflow back to original value
    //   slideEditor.style.overflow = "hidden";
    // });
  }

  exportAsPDF() {
    // this.data.slideRenderMagnification = 100;
    // this.data.currentSlideIndex = 0;
    // let slideRender = document.getElementById('slide-render');
    // let originalOverflowSR = slideRender.style.overflow;
    // slideRender.style.overflow = "visible";

    // // Parent container must be set to overflow: visible to capture entire canvas
    // let slideRenderArea = document.getElementById('slide-render-area');
    // let originalWidth = slideRenderArea.style.width;
    // let originalOverflowSRA = slideRenderArea.style.overflow;
    // slideRenderArea.style.width = "auto";
    // slideRenderArea.style.overflow = "visible";

    // let doc = new jsPDF({
    //   orientation: "landscape",
    //   unit: "in",
    //   format: [16, 9]
    // });

    // let pdfWidth = doc.internal.pageSize.width;
    // let pdfHeight = doc.internal.pageSize.height;

    // // To make the img output size match the pdf size, make sure that:
    // // canvas output size * scale factor === pdf document size converted to px


    // let addSlides = () => {
    //   // Adds slides to jsPdf document recursively and saves when last slide has been added
    //   setTimeout(() => {
    //     if (this.data.currentSlideIndex === this.data.slides.length) {
    //       this.data.currentSlideIndex = 0;
    //       doc.save("a4.pdf");

    //       // Change styleEditor overflow back to original value
    //       slideRenderArea.style.width = originalWidth;
    //       slideRenderArea.style.overflow = originalOverflowSRA;
    //       slideRender.style.overflow = originalOverflowSR;

    //       return;
    //     } else {
    //       html2canvas(slideRender, {
    //         height: this.data.documentSize.height,
    //         width: this.data.documentSize.width,
    //         scale: 2,
    //         allowTaint: false,
    //         useCORS: true
    //       }).then(canvas => {
    //         let imgData = canvas.toDataURL("image/png");
    //         doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    //         this.data.currentSlideIndex += 1;

    //         if (this.data.currentSlideIndex < this.data.slides.length) {
    //           doc.addPage();
    //         }
    //         addSlides();
    //       });
    //     }
    //   }, 1000);
    // }
    // addSlides();
  }
}