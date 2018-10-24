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

  deleteSlideObjectById(id: number) {
    let currentSlideObjects = this.data.slides[this.data.currentSlideIndex].getSlideProperty('slideObjects');

    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].getSlideObjectProperty('id') === id) {
        currentSlideObjects.splice(i, 1);
      }
    }
  }
}
