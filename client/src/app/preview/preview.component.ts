import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { Slide } from '../classes/slide';
import { TextObject } from '../classes/textObject';
import { ImageObject } from '../classes/imageObject';
import { Toolbar2AppLogicService } from '../toolbar2-app-logic.service';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @ViewChild('previewContainer') previewContainer: ElementRef<any>;

  slides: Slide[];
  documentSize;
  previewSlideIndex: number = 0;
  slideRenderMagnification: number;

  constructor(private store: Store<ProjectState>, private toolbar2: Toolbar2AppLogicService) { }

  ngOnInit() {
    this.store.select('projectReducer').subscribe(projectState => {
      this.slides = projectState.slides;
      this.documentSize = projectState.documentSize;
    })
    this.launchIntoFullscreen(this.previewContainer.nativeElement);
    setTimeout(() => this.enableSlideShowControls(), 1000);
  }

  getPreviewSlideRenderCss() {
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
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    element.requestPointerLock();
    document.addEventListener("fullscreenchange", this.exitPreviewMode);
    document.addEventListener("mozfullscreenchange", this.exitPreviewMode);
    document.addEventListener("webkitfullscreenchange", this.exitPreviewMode);
    document.addEventListener("msfullscreenchange", this.exitPreviewMode);
  }

  // Mouse and keyboard navigation
  enableSlideShowControls() {
    document.addEventListener('keyup', this.keyboardControl);
    document.addEventListener('click', this.mouseControl);
  }

  previousSlide() {
    if (this.previewSlideIndex > 0) this.previewSlideIndex--;
  }

  nextSlide() {
    if (this.previewSlideIndex < this.slides.length - 1) this.previewSlideIndex++;
  }

  mouseControl = (event) => {
    switch (event.button) {
      case 2: // Right click
        this.previousSlide(); break;
      case 0: // Left click
        this.nextSlide(); break;
    }
  }

  keyboardControl = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        this.previousSlide(); break;
      case 'ArrowRight':
        this.nextSlide(); break;
    }
  }

  exitPreviewMode = (event) => {
    if (document.fullscreenElement || document.webkitFullscreenElement === null) {
      this.toolbar2.isPreviewMode = false;
      // Disable keyboard and mouse navigation
      document.removeEventListener('keyup', this.keyboardControl);
      document.removeEventListener('click', this.mouseControl);
    }
  }

}
