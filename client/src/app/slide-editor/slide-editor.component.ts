import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Slide } from '../classes/slide';

@Component({
  selector: 'slide-editor',
  templateUrl: './slide-editor.component.html',
  styleUrls: ['./slide-editor.component.css']
})
export class SlideEditorComponent implements OnInit {

  indexOfSelectedSlideObject: number;

  constructor(private data: DataService) { }

  ngOnInit() {


  }

  // Slide editor Toolbar functions

  createNewSlide() {
    this.data.slides.push(new Slide());
    this.data.currentSlideIndex = this.data.slides.length - 1;
  }

  preview() {

    let context = this;
    this.data.currentSlideIndex = 0;

    // Slideshow contents
    let slideRender = document.getElementsByClassName('slide-render')[0] as HTMLElement;
    let copy = slideRender.cloneNode(true) as HTMLElement;

    // Fullscreen container
    let fullscreenContainer = document.createElement('div');
    fullscreenContainer.style.background = "black";

    // Foreground fullscreen transparent overlay to disable draggable contents in fullscreen mode
    let overlay = document.createElement('div');
    overlay.style.cssText = `
      background: transparent;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0 ;
      left: 0;
      z-index: 100;
    `;

    // Append elements to DOM
    copy.appendChild(overlay);
    fullscreenContainer.appendChild(copy);
    document.body.appendChild(fullscreenContainer);

    // Scale elements to full screen size while maintaining aspect ratio
    let scaleX = screen.width / copy.clientWidth;
    let scaleY = screen.height / copy.clientHeight;
    let scaleFactor = Math.min(scaleX, scaleY).toFixed(1);
    copy.style.transform = "scale(" + scaleFactor.toString() + ", " + scaleFactor.toString() + ")";
    copy.style.position = "absolute";
    copy.style.transformOrigin = "left top";
    copy.style.top = "0";
    copy.style.left = "0";
    copy.style.overflow = "hidden";

    launchIntoFullscreen(fullscreenContainer);

    // Enable slideshow navgation
    document.addEventListener('keyup', keyboardControl);
    document.addEventListener('click', mouseControl);

    // Exit preview mode - Remove fullscreen elements from DOM
    document.addEventListener("fullscreenchange", exitPreviewMode);
    document.addEventListener("mozfullscreenchange", exitPreviewMode);
    document.addEventListener("webkitfullscreenchange", exitPreviewMode);
    document.addEventListener("msfullscreenchange", exitPreviewMode);

    function exitPreviewMode() {
      if (document.fullscreenElement || document.webkitFullscreenElement === null) {
        document.body.removeChild(fullscreenContainer);
      
        // Disable keyboard and mouse navigation
       document.removeEventListener('keyup', keyboardControl);
       document.removeEventListener('click', mouseControl);
      }
    }

    function launchIntoFullscreen(element) {
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
    }

    function mouseControl(event) {
      console.log(event.button);
      switch (event.button) {
        case 2: // Right click
          context.previousSlide();
          refreshPreview();
          break;
        case 0: // Left click
          context.nextSlide();
          refreshPreview();
          break;
      }
    }

    function keyboardControl(event) {
      switch (event.key) {
        case 'ArrowLeft':
          context.previousSlide();
          refreshPreview();
          break;
        case 'ArrowRight':
          context.nextSlide();
          refreshPreview();
          break;
      }
    }

    function refreshPreview() {
      setTimeout(()=>{
        fullscreenContainer.removeChild(copy);
        copy = slideRender.cloneNode(true) as HTMLElement;
        copy.style.transform = "scale(" + scaleFactor.toString() + ", " + scaleFactor.toString() + ")";
        copy.style.position = "absolute";
        copy.style.transformOrigin = "left top";
        copy.style.top = "0";
        copy.style.left = "0";
        copy.style.overflow = "hidden";
        fullscreenContainer.appendChild(copy);
      }, 300);
    }
  }

  previousSlide() {
    if (this.data.currentSlideIndex > 0) {
      this.data.currentSlideIndex--;
    }
    console.log('Current slide index:', this.data.currentSlideIndex);
  }

  nextSlide() {
    if (this.data.currentSlideIndex < this.data.slides.length - 1) {
      this.data.currentSlideIndex++;
    }
    console.log('Current slide index:', this.data.currentSlideIndex);
  }

  deleteCurrentSlide() {
    this.data.slides.splice(this.data.currentSlideIndex, 1);

    if (this.data.currentSlideIndex >= this.data.slides.length) {
      this.data.currentSlideIndex--;
    }
  }

  deleteSlideObjectById(id: number) {
    let currentSlideObjects = this.data.slides[this.data.currentSlideIndex].getSlideProperty('slideObjects');

    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].getSlideObjectProperty('id') === id) {
        currentSlideObjects.splice(i, 1);
      }
    }
  }

  // Slide editor render functions

  getSlideRenderCss() {
    let backgroundColor = this.data.slides[this.data.currentSlideIndex].getSlideProperty('backgroundColor');
    let slideRenderWidth = this.data.documentSize['width'];
    let slideRenderHeight = this.data.documentSize['height'];
    let renderContainerWidth = document.querySelector('#slide-render-container').clientWidth;
    let translationX;

    if (slideRenderWidth > renderContainerWidth) {
      translationX = '-' + (slideRenderWidth - renderContainerWidth) / 2 + 'px';
    } else {
      translationX = '0px';
    }

    let css = {
      'background': backgroundColor,
      'height': slideRenderHeight + 'px',
      'width': slideRenderWidth + 'px',
      'transform': 'translate(' + translationX + ') scale(' + this.data.slideRenderMagnification / 100 + ')',
      'position': 'relative'
    }
    return css;
  }

  // Slide editor control panel functions
  selectObject(objectId: number) {
    this.indexOfSelectedSlideObject = objectId;
  }

}
