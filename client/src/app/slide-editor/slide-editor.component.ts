import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';

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

  // Slide editor render functions

  toggleRenderOverflow() {
    this.showRenderOverflow = !this.showRenderOverflow;
  }

  renderZoomController(){
    let render = document.getElementById('slide-render');
    let renderHeight = render.clientHeight * this.data.slideRenderMagnification /100;
    let renderWidth = render.clientWidth * this.data.slideRenderMagnification /100;

    let renderArea = document.getElementById('slide-render-area');
    let renderAreaHeight = renderArea.clientHeight;
    let renderAreaWidth = renderArea.clientWidth;

    if(renderHeight >= renderAreaHeight) {
      renderArea.scrollTop = (renderHeight - renderAreaHeight) / 2;
    }

    if(renderWidth >= renderAreaWidth) {
      renderArea.scrollLeft = (renderWidth - renderAreaWidth) / 2
    }
    
  }

  getSlideRenderCss() {
    let backgroundColor = this.data.slides[this.data.currentSlideIndex].getSlideProperty('backgroundColor');
    let width = this.data.documentSize['width'];
    let height = this.data.documentSize['height'];

    let render = document.getElementById('slide-render');
    let renderHeight = render.clientHeight * this.data.slideRenderMagnification /100;
    let renderWidth = render.clientWidth * this.data.slideRenderMagnification /100;

    let renderArea = document.getElementById('slide-render-area');
    let renderAreaHeight = renderArea.clientHeight;
    let renderAreaWidth = renderArea.clientWidth;

    let css = {
      'background': backgroundColor,
      'height': height + 'px',
      'width': width + 'px',
      'transform-origin' : '0 0',
      'transform': 'scale(' + this.data.slideRenderMagnification / 100 + ')',
      'position': 'absolute',
      'overflow': this.showRenderOverflow ? 'visible' : 'hidden'
    }

    if(renderHeight < renderAreaHeight) {
      css['top'] = (renderAreaHeight - renderHeight) / 2 + 'px';
    }

    if(renderWidth < renderAreaWidth) {
      css['left'] = (renderAreaWidth - renderWidth) / 2 + 'px';
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

  deleteSlideObjectById(id: number) {
    let currentSlideObjects = this.data.slides[this.data.currentSlideIndex].getSlideProperty('slideObjects');

    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].getSlideObjectProperty('id') === id) {
        currentSlideObjects.splice(i, 1);
      }
    }
  }
}
