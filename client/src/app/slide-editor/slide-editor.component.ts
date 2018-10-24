import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Slide } from '../classes/slide';
import { DialogService } from '../dialog.service';



interface FsDocument extends HTMLDocument {
  fullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
}

export function isFullScreen(): boolean {
  const fsDoc = <FsDocument> document;

  return !!(fsDoc.fullscreenElement || fsDoc.mozFullScreenElement || fsDoc.webkitFullscreenElement || fsDoc.msFullscreenElement);
}

@Component({
  selector: 'slide-editor',
  templateUrl: './slide-editor.component.html',
  styleUrls: ['./slide-editor.component.css']
})

export class SlideEditorComponent implements OnInit {

  indexOfSelectedSlideObject: number;
  showRenderOverflow: boolean = false;

  constructor(private data: DataService, private dialog: DialogService) { }

  ngOnInit() {

  }



  // Slide editor Toolbar functions

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
      if (!isFullScreen()) {
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

    this.dialog.alert("Are you sure you want to delete this slide from your project?", callback);
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

  toggleRenderOverflow() {
    this.showRenderOverflow = !this.showRenderOverflow;
  }

  getSlideRenderCss() {
    let backgroundColor = this.data.slides[this.data.currentSlideIndex].getSlideProperty('backgroundColor');
    let slideRenderWidth = this.data.documentSize['width'];
    let slideRenderHeight = this.data.documentSize['height'];
    let renderContainerWidth = document.getElementById('slide-render-area').clientWidth;
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
      'position': 'relative',
      'overflow': this.showRenderOverflow ? 'visible' : 'hidden'
    }

    return css;
  }

  // Slide editor control panel functions
  selectObject(objectId: number) {
    this.indexOfSelectedSlideObject = objectId;
  }

  // User clicks zoom in/out
  zoom(direction: string) {
    let magnification = this.data.slideRenderMagnification;
    let increment = 5;

    switch (direction) {
      case 'in':
        if (magnification > 200 - increment) {
          magnification = 200;
        } else {
          magnification += increment;
        }
        this.data.slideRenderMagnification = magnification;
        break;
      case 'out':
        if (magnification < increment) {
          magnification = 0;
        } else {
          magnification -= increment;
        }
        this.data.slideRenderMagnification = magnification;
        break;
    }

  }

  // This controls the image size when user inputs a value in the heirarchy
  maintainRatio(slideObject, dimension, value) {
    // Get original aspect ratio of this slide object
    let ratio: number;

    if (slideObject.width || slideObject.height === "auto") {
      // Get ratio by some other method
      let img = new Image;
      img.src = slideObject.getSlideObjectProperty('imagePath');
      img.onload = () => {
        ratio = img.width / img.height;
        setImageSize();
        img = null;
      }
    } else {
      ratio = slideObject.width / slideObject.height;
      setImageSize();
    }

    function setImageSize() {
      switch (dimension) {
        case 'width':
          let newHeight = value / ratio;
          slideObject.width = value;
          slideObject.height = newHeight;
          break;
        case 'height':
          let newWidth = value * ratio;
          slideObject.height = value;
          slideObject.width = newWidth;
          break;
      }
    }
  }
}
