import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'slide-editor',
  templateUrl: './slide-editor.component.html',
  styleUrls: ['./slide-editor.component.css']
})

export class SlideEditorComponent implements OnInit {

  indexOfSelectedSlideObject: number;
  showRenderOverflow: boolean = false;

  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('workspace') workspace: ElementRef<any>;
  @ViewChild('controlToolbar') controlToolbar: ElementRef<any>;

  constructor(private data: DataService, private dialog: DialogService) { }

  ngOnInit() {
    this.enableSlideEditorResizer();
  }

  enableSlideEditorResizer(){
    let startResize = () => {
      document.addEventListener('mousemove', this.resizeGrid);
      document.addEventListener('mouseup', stopResize);
    }

    let stopResize = () => {
      document.removeEventListener('mousemove', this.resizeGrid);
      document.removeEventListener('mouseup', stopResize);
    }

    let resizer = this.resizer.nativeElement;
    resizer.addEventListener('mousedown', startResize);
  }

  resizeGrid = (e) => {
    let slideEditorWorkspace = this.workspace.nativeElement;
    let resizer = this.resizer.nativeElement;
    let controlToolbar = this.controlToolbar.nativeElement;

    let viewportHeight = document.documentElement.offsetHeight;
    let offset = viewportHeight - slideEditorWorkspace.offsetHeight;

    let renderAreaHeight = e.pageY - offset - resizer.offsetHeight / 2;
    let slideControlHeight = viewportHeight - e.pageY - resizer.offsetHeight / 2;

    slideEditorWorkspace.style.gridTemplateRows = renderAreaHeight + 'fr ' + resizer.offsetHeight + 'px ' + slideControlHeight + 'fr';

    // Upper boundary
    if(e.pageY < offset + resizer.offsetHeight / 2){
      slideEditorWorkspace.style.gridTemplateRows = '0px ' + resizer.offsetHeight + 'px ' + '1fr';
    }

    // Lower boundary
    if(e.pageY >= viewportHeight - controlToolbar.offsetHeight - resizer.offsetHeight/2) {
      slideEditorWorkspace.style.gridTemplateRows = renderAreaHeight + 'fr ' + resizer.offsetHeight + 'px ' + controlToolbar.offsetHeight + 'px';
    }

  }

  // Slide editor render functions

  toggleRenderOverflow() {
    this.showRenderOverflow = !this.showRenderOverflow;
  }

  renderZoomController(){
    let render = document.getElementById('slide-render');
    let renderHeight = render.offsetHeight * this.data.slideRenderMagnification /100;
    let renderWidth = render.clientWidth * this.data.slideRenderMagnification /100;

    let renderArea = document.getElementById('slide-render-area');
    let renderAreaHeight = renderArea.offsetHeight;
    let renderAreaWidth = renderArea.clientWidth;

    if(renderHeight >= renderAreaHeight) {
      renderArea.scrollTop = (renderHeight - renderAreaHeight) / 2;
    }

    if(renderWidth >= renderAreaWidth) {
      renderArea.scrollLeft = (renderWidth - renderAreaWidth) / 2
    }
    
  }

  getSlideRenderCss() {
    let backgroundColor = this.data.slides[this.data.currentSlideIndex].getProperty('backgroundColor');
    let width = this.data.documentSize['width'];
    let height = this.data.documentSize['height'];

    let render = document.getElementById('slide-render');
    let renderHeight = render.offsetHeight * this.data.slideRenderMagnification /100;
    let renderWidth = render.clientWidth * this.data.slideRenderMagnification /100;

    let renderArea = document.getElementById('slide-render-area');
    let renderAreaHeight = renderArea.offsetHeight;
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
      img.src = slideObject.getProperty('imagePath');
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
    let currentSlideObjects = this.data.slides[this.data.currentSlideIndex].getProperty('slideObjects');

    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].getProperty('id') === id) {
        currentSlideObjects.splice(i, 1);
      }
    }
  }
}
