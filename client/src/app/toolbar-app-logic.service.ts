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
import { SandboxAppLogicService } from './sandbox-app-logic.service';

@Injectable({
  providedIn: 'root'
})
export class ToolbarAppLogicService {

  sessionData;

  constructor(private router: Router, private sandbox: SandboxAppLogicService, private data: DataService, private dialog: DialogService, private store: Store<ProjectState>, private user: Store<UserState>, private http: HttpClient) { }

  dashboard() {
    // Save project before navigating back to the dashboard
    this.data.saveProject();
    this.router.navigate(['dashboard']);
  }

  home() {
    this.router.navigate(['/']);
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
    /*
      1.  Detect user session.  This feature is only available for registered users.
      2.  Get projectState documentSize for use in jsPdf and HTML2CANVAS
      3.  Display loader screen and prep DOM for HTML2CANVAS.  
            **HTML2CANVAS requires slideRender's scale = 1, and slideRender&&slideRenderArea's overflow = visible to work properly
      4.  Create jsPdf document
      5.  Start at slide 0 and recursively convert each slide to an image with HTML2CANVAS, and add it to jsPdf document
            ** Scale custom-sized documents so that they fit inside of the jsPdf document properly
      6.  When last slide has been converted and added to the jsPdf document, 
            -Revert DOM changes from (3) back to their original values
            -Download jsPdf document to browser for the user
            -Hide loader screen
    */
    this.sessionData = sessionStorage.getItem('sessionData');
    // Is user logged in?
    if (!this.sessionData) {
      this.dialog.toast('Register to unlock this feature!');
    } else if (this.sessionData) {
      // Display loader
      this.data.isSlideRenderLoading = true;
      // Get DOM element for HTML2CANVAS
      let slideRender = document.getElementById('slide-render');

      // Get project state
      let projectState;
      const getProjectState = this.store.select('projectReducer').subscribe(data => {
        projectState = data;
      });

      // Prep DOM for HTML2CANVAS
      this.data.canvasPrep('start');

      // Define jsPDF settings
      let doc = new jsPDF({
        orientation: projectState.documentSize.jsPdfOrientation,
        unit: "in",
        format: projectState.documentSize.jsPdfFormat
      });

      /* To make the img output size match the pdf size, make sure that:
      canvas output size * scale factor === pdf document size converted to px */

      // Start at slide 0
      while (projectState.currentSlideIndex > 0) this.store.dispatch({ type: PREV_SLIDE });

      // Recursively convert each slide to canvas and add to jsPdf doc -- 1 sec for each slide
      let completedFinalSlide = false;
      let imgData;
      let docWidth = projectState.documentSize.jsPdfFormat[0];
      let docHeight = projectState.documentSize.jsPdfFormat[1]
      let width = docWidth; // This would be changed if document size is custom
      let height = docHeight; // This would be changed if document size is custom
      let xTranslation = 0;
      let yTranslation = 0;

      let addImageToDoc = () => {
        // Add image to doc using the variables above
        doc.addImage(imgData, "PNG", xTranslation, yTranslation, width, height);

        // If not on last slide, then add a new doc for the next slide.
        if (projectState.currentSlideIndex < projectState.slides.length - 1) {
          this.store.dispatch({ type: NEXT_SLIDE });
          doc.addPage();
        } else if (projectState.currentSlideIndex === projectState.slides.length - 1) {
          // If last slide, trigger recursion exit condition
          completedFinalSlide = true;
        }
        // Call recursion function
      }

      let addSlides = () => {
        // Add slides to jsPdf document recursively and save when last slide has been added
        setTimeout(() => {
          if (completedFinalSlide) {
            // Exit condition
            // Save document
            doc.save("a4.pdf");
            // Set css values back to their original values
            this.data.canvasPrep('complete');
            getProjectState.unsubscribe();
            // Hide loader screen
            this.data.isSlideRenderLoading = false;
            return;
          } else {
            // Convert to canvas, add to PDF doc, and increment currentSlideIndex
            html2canvas(slideRender, {
              height: projectState.documentSize.height,
              width: projectState.documentSize.width,
              scale: 1,
              allowTaint: false,
              useCORS: true
            }).then(canvas => {
              imgData = canvas.toDataURL("image/png");

              if (!projectState.documentSize.isCustom) {
                addImageToDoc();  // This function increments currentSlideIndex
                addSlides();  // Recursion
              } else if (projectState.documentSize.isCustom) {

                let image = new Image;
                image.src = imgData;
                image.onload = () => {
                  console.log('image onload')
                  // set width and height of image (in inches here)
                  let imageHeightInches = image.width / 96;
                  let imageWidthInches = image.height / 96;
                  let ratio = imageWidthInches / imageHeightInches;

                  // Scale down if image is larger than doc size
                  // Maintain aspect ratio
                  if (imageHeightInches > height) {
                    imageHeightInches = height;
                    imageWidthInches = height / ratio;
                  }
                  if (imageWidthInches > width) {
                    imageWidthInches = width;
                    imageHeightInches = width * ratio;
                  }
                  width = imageWidthInches;
                  height = imageHeightInches;

                  // Set margins to center image in doc
                  if (width < docWidth) xTranslation = (docWidth - width) / 2;
                  if (height < docHeight) yTranslation = (docHeight - height) / 2;
                  addImageToDoc();  // This function increments currentSlideIndex
                  addSlides();  // Recursion
                }
              }
            })
              .catch(error => console.log(error));
          }
        }, 1000);
      }

      // Start recursion
      addSlides();
    }
  }

  dataURLtoBlob = (dataurl) => {
    // This function converts data URL to a blob object
    // data URL was causing a 'network error' when downloading large images  
    // because 'a' tags have a cap on the length of its src.
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  saveAsPng() {
    /*
        1.  Detect user session.  This feature is only available for registered users.
        2.  Prep DOM for HTML2CANVAS
        3.  Show loader screen
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
        useCORS: true
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