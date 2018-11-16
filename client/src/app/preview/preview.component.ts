import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { Slide } from '../classes/slide';
import { Toolbar2AppLogicService } from '../toolbar2-app-logic.service';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  /*  UI VARIABLES */
  @ViewChild('previewContainer') previewContainer: ElementRef<any>;
  slides: Slide[];
  documentSize;
  previewSlideIndex: number = 0;
  slideRenderMagnification: number;

  constructor(private store: Store<ProjectState>, private toolbar2: Toolbar2AppLogicService) { }

  ngOnInit() {
    // Subscribe to projectState
    this.store.select('projectReducer').subscribe(projectState => {
      this.slides = projectState.slides;
      this.documentSize = projectState.documentSize;
    })

    this.launchIntoFullscreen(this.previewContainer.nativeElement);
    // Putting a setTimeout on the slideshowControls prevents the clicking of the "preview" button
    // to cause the slideshow to start at the second slide.
    setTimeout(() => this.enableSlideShowControls(), 1000);
  }

  getPreviewSlideRenderCss() {
    // This function sets the css on the template's slide render so that it is centered horizontally and vertically,
    // and takes the full screen while maintaining aspect ratio
    let backgroundColor = this.slides[this.previewSlideIndex].getProperty('backgroundColor');
    let width = this.documentSize['width'];
    let height = this.documentSize['height'];
    this.slideRenderMagnification = window.innerHeight / height;

    let css = {
      'background': backgroundColor,
      'height': height + 'px',
      'width': width + 'px',
      'transform-origin': '50% 50%',
      'transform': 'scale(' + this.slideRenderMagnification + ')',
      'overflow': 'hidden',
    }
    return css;
  }

  launchIntoFullscreen(element) {
    // This function triggers the browser to go into fullscreen mode with the element
    // passed in as the parameter
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    // Hide cursor while in full screen mode
    element.requestPointerLock();

    // Detect when user exits fullscreen
    document.addEventListener("fullscreenchange", this.exitPreviewMode);
    document.addEventListener("mozfullscreenchange", this.exitPreviewMode);
    document.addEventListener("webkitfullscreenchange", this.exitPreviewMode);
    document.addEventListener("msfullscreenchange", this.exitPreviewMode);
  }

  exitPreviewMode = (event) => {
    // This function cleans up eventListeners when user exits fullscreen 
    if (document.fullscreenElement || document.webkitFullscreenElement === null) {
      this.toolbar2.isPreviewMode = false;
      // Disable keyboard and mouse navigation
      document.removeEventListener('keyup', this.keyboardControl);
      document.removeEventListener('click', this.mouseControl);
    }
  }

  enableSlideShowControls() {
    // This function uses event listeners to handle slideshow navigation
    // with mouse and arrow keys
    document.addEventListener('keyup', this.keyboardControl);
    document.addEventListener('click', this.mouseControl);
  }

  mouseControl = (event) => {
    // This function is used in eventListeners for slideshow navigation
    switch (event.button) {
      case 2: // Right click
        this.previousSlide(); break;
      case 0: // Left click
        this.nextSlide(); break;
    }
  }

  keyboardControl = (event) => {
    // This function is used in eventListeners for slideshow navigation
    switch (event.key) {
      case 'ArrowLeft':
        this.previousSlide(); break;
      case 'ArrowRight':
        this.nextSlide(); break;
    }
  }

  previousSlide() {
    // Helper function for slideshow navigation
    if (this.previewSlideIndex > 0) this.previewSlideIndex--;
  }

  nextSlide() {
    // Helper function for slideshow navigation
    if (this.previewSlideIndex < this.slides.length - 1) this.previewSlideIndex++;
  }

}
