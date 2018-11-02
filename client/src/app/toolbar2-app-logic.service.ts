import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { Slide } from "./classes/slide";


@Injectable({
  providedIn: 'root'
})
export class Toolbar2AppLogicService {

  constructor(private data: DataService, private dialog: DialogService) { }

  createNewSlide() {
    this.data.slides.push(new Slide());
    this.data.currentSlideIndex = this.data.slides.length - 1;
  }

  preview() {
    let context = this;

    // The 'click' eventListener causes mouseControl to increment currentSlideIndex.
    // Initializing to -1 allows the slideshow to start at currentSlideIndex = 0
    this.data.currentSlideIndex = -1;

    // Create HTML elements to be displayed in fullscreen mode:
    // Slideshow contents
    let slideRender = document.getElementById('slide-render') as HTMLElement;
    let copy;

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

    // Fullscreen container 
    // Putting fullscreen contents in a container allows control over the sizing 
    // and positioning of elements displayed in fullscreen mode
    let fullscreenContainer = document.createElement('div');
    fullscreenContainer.style.cssText = `
      background" #000;
    `;

    // Add elements to DOM
    document.body.appendChild(fullscreenContainer);

    refreshPreview();
    launchIntoFullscreen(fullscreenContainer);

    // Enable slideshow navgation
    document.addEventListener('keyup', keyboardControl);
    document.addEventListener('click', mouseControl);

    // Exit preview mode - Remove fullscreen elements and event listeners from DOM
    document.addEventListener("fullscreenchange", exitPreviewMode);
    document.addEventListener("mozfullscreenchange", exitPreviewMode);
    document.addEventListener("webkitfullscreenchange", exitPreviewMode);
    document.addEventListener("msfullscreenchange", exitPreviewMode);

    function exitPreviewMode(event) {
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
      setTimeout(() => {
        copy = slideRender.cloneNode(true) as HTMLElement;
        copy.appendChild(overlay);
        fullscreenContainer.appendChild(copy);

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
      }, 300);
    }
  }

  previousSlide() {
    if (this.data.currentSlideIndex > 0) {
      this.data.currentSlideIndex--;
    }
  }

  nextSlide() {
    if (this.data.currentSlideIndex < this.data.slides.length - 1) {
      this.data.currentSlideIndex++;
    }
  }

  deleteCurrentSlide() {

    let callback = () => {
      this.data.slides.splice(this.data.currentSlideIndex, 1);

      if (this.data.currentSlideIndex >= this.data.slides.length) {
        this.data.currentSlideIndex--;
      }
    }

    this.dialog.alert("Are you sure you want to delete this slide from your project?", 'danger', callback);
  }
}
