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
import { ADD_TEXTSTYLE, SET_MODE, ADD_IMAGESTYLE, SELECT_TEXTSTYLE, SELECT_IMAGESTYLE, DEL_SLIDE, PREV_SLIDE, NEXT_SLIDE } from './state-management/actions/projectActions';
import { Router } from '@angular/router';
import { SandboxController } from './sandbox-controller.service';

@Injectable({
  providedIn: 'root'
})
export class ToolbarController {

  sessionData;
  projectState;
  getProjectState = this.store.select('projectReducer').subscribe(data => {
    this.projectState = data;
  });

  constructor(private router: Router, private sandbox: SandboxController, private data: DataService, private dialog: DialogService, private store: Store<ProjectState>, private user: Store<UserState>, private http: HttpClient) { }

  dashboard() {
    // Save project before navigating back to the dashboard
    this.dialog.toast('Saving project');
    this.data.saveProject().then(res => {
      if (res['success']) {
        this.dialog.toast('Your project has been saved');
        this.router.navigate(['dashboard']);
      }

      if (!res['success']) {
        let msg = 'There was a problem saving your project.';
        this.dialog.alert(msg, 'danger')
      }
    });
  }

  createTextStyle() {
    this.store.dispatch({ type: ADD_TEXTSTYLE });
    this.store.dispatch({ type: SET_MODE, payload: { mode: 'text' } });
  }

  createImageStyle() {
    this.store.dispatch({ type: ADD_IMAGESTYLE });
    this.store.dispatch({ type: SET_MODE, payload: { mode: 'image' } });
  }

  selectStyle(style: ImageStyle | TextStyle) {
    switch (style.type) {
      case 'TextStyle':
        this.store.dispatch({ type: SELECT_TEXTSTYLE, payload: { textStyle: style } });
        break;
      case 'ImageStyle':
        this.store.dispatch({ type: SELECT_IMAGESTYLE, payload: { imageStyle: style } });
        this.sandbox.renderImagePreview();
        break;
    }
  }

  save() {
    if (!sessionStorage.getItem('sessionData')) {
      this.dialog.toast('Register to unlock this feature!');
    } else if (sessionStorage.getItem('sessionData')) {
      this.data.saveProject().then(res => {
        if (!res['success']) this.dialog.alert('There was a problem saving your project.', 'danger');
        if (res['success']) this.dialog.toast('Your project has been saved.');
      })
        .catch(error => console.log(error));
    }
  }

  /*  EXPORT TO PDF AND SAVE AS PNG FUNCTIONS */
  exportAsPDF = () => {
    // Check is user logged in?
    this.data.getUserState().then(userState => {
      if (!userState['isLoggedIn']) this.dialog.toast('Register to unlock this feature!');

      if (userState['isLoggedIn']) {
        // Prepare the app for export:  Show loader screen and prep canvas.  Start at slide 0.
        this.data.isSlideRenderLoading = true;
        this.data.canvasPrep('start');
        while (this.projectState['currentSlideIndex'] > 0) this.store.dispatch({ type: PREV_SLIDE });

        // Create a jsPDF doc
        let doc = new jsPDF({
          orientation: this.projectState['documentSize'].jsPdfOrientation,
          unit: "in",
          format: this.projectState['documentSize'].jsPdfFormat
        });

        let bestFitValues = this.getBestFitValues();
        this.addSlidesToPdf(doc, bestFitValues, false);
      }
    })
  }

  addSlidesToPdf(pdfDoc: jsPDF, values: any, completedFinalSlide: boolean) {
    // Recursively convert each HTML slide to an image using HTML2CANVAS and add it to jsPdf doc 
    // Use setTimeout to allow 1000ms for each slide.  This prevents an async problem with jsPDF,
    // which caused pages to be added to the document in the wrong order.
    setTimeout(() => {
      //Define recursion exit condidion
      if (completedFinalSlide) {

        pdfDoc.save("presentation.pdf");
        this.data.canvasPrep('complete');
        this.data.isSlideRenderLoading = false;
        return;

      } else {
        // Convert canvas to image
        html2canvas(document.getElementById('slide-render'), {
          height: this.projectState.documentSize.height,
          width: this.projectState.documentSize.width,
          scale: 1,
          allowTaint: false,
          useCORS: true,
          logging: false
        })

          // Add image to jsPDF document
          .then(canvas => {
            let imgData = canvas.toDataURL("image/png");
            pdfDoc.addImage(imgData, "PNG", values.xTranslate, values.yTranslate, values.width, values.height);

            if (this.projectState.currentSlideIndex < this.projectState.slides.length - 1) {
              // If this is not the last slide, prep for next iteration.
              this.store.dispatch({ type: NEXT_SLIDE });
              pdfDoc.addPage();
              this.addSlidesToPdf(pdfDoc, values, false);
            } else if (this.projectState.currentSlideIndex === this.projectState.slides.length - 1) {
              // If this is the last slide, then trigger exit condition.
              this.addSlidesToPdf(pdfDoc, values, true);
            }
          })
      }
    }, 1000)
  }

  getBestFitValues() {
    // This function returns an object containing values for x, y, h, and w (in inches) that will give the outputted  
    // HTML2CANVAS image the best fit on the jsPDF doc
    // Note: HTML2CANVAS uses pixels while jsPDF uses inches.
    // At 96 dpi, 1 inch === 96 pixels
    let values = {
      xTranslate: 0,
      yTranslate: 0,
      width: 0,
      height: 0
    }

    let docWidth = this.projectState.documentSize.jsPdfFormat[0];
    let docHeight = this.projectState.documentSize.jsPdfFormat[1];
    let imgWidthInches = this.projectState.documentSize.width / 96;
    let imgHeightInches = this.projectState.documentSize.height / 96;
    let ratio = imgWidthInches / imgHeightInches;

    // If img size is larger than jsPDF doc size, then scale down.  Maintain aspect ratio.
    if (imgWidthInches > docWidth) {
      imgWidthInches = docWidth;
      imgHeightInches = docWidth / ratio
    }

    if (imgHeightInches > docHeight) {
      imgHeightInches = docHeight;
      imgWidthInches = docHeight * ratio
    }

    // Update values object with newly calculated height and width
    values.width = imgWidthInches;
    values.height = imgHeightInches;

    // Calculate values for xTranslate and yTranslate that will center the image in the jsPDF doc.
    if (imgWidthInches < docWidth) values.xTranslate = (docWidth - imgWidthInches) / 2;
    if (imgHeightInches < docHeight) values.yTranslate = (docHeight - imgHeightInches) / 2;

    return values;
  }

  dataURLtoBlob = (dataurl) => {
    // This function converts data URL to a blob object
    // data URL was causing a 'network error' when downloading large images  
    // because 'a' tags have a cap on the length of its src.
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) u8arr[n] = bstr.charCodeAt(n);

    return new Blob([u8arr], { type: mime });
  }

  saveAsPng() {
    /*
        1.  Detect user session.  This feature is only available for registered users.
        2.  Prep DOM for HTML2CANVAS
        4.  Get projectState documentSize for use in HTML2CANVAS
        5.  Convert slide render to canvas
        6.  Convert canvas to data URL
        7.  Convert data URL to blob 
        8.  Convert blob to object URL
        9.  Download PNG for user
        10. Revert DOM changes from (2) back to their original values
        11. Hide loader screen
    */
    this.sessionData = sessionStorage.getItem('sessionData');
    // Check if user is logged in
    if (!this.sessionData) {
      this.dialog.toast('Register to unlock this feature!');
    } else if (this.sessionData) {
      // Show loader screen
      this.data.isSlideRenderLoading = true;
      let slideRender = document.getElementById("slide-render");
      this.data.canvasPrep('start');

      // Get project state for doc height and width
      let projectState;
      const getProjectState = this.store.select('projectReducer').subscribe(data => {
        projectState = data;
      });

      html2canvas(slideRender, {
        height: projectState.documentSize.height,
        width: projectState.documentSize.width,
        scale: 1,
        allowTaint: false,
        useCORS: true,
        logging: false
      }).then(canvas => {
        // Conversions
        let imgData = canvas.toDataURL("image/png");
        let blob = this.dataURLtoBlob(imgData);
        let objUrl = URL.createObjectURL(blob);
        // Download PNG
        let imgElement = document.createElement('a');
        imgElement.href = objUrl;
        imgElement.download = "slide.png";
        imgElement.click();
        // Clean up
        this.data.canvasPrep('complete');
        getProjectState.unsubscribe();
        this.data.isSlideRenderLoading = false;
      });
    }
  }
}