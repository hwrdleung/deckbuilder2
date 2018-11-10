import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';
import { ViewChild } from '@angular/core'
import { SlideEditorAppLogicService } from '../slide-editor-app-logic.service';
import { Slide } from '../classes/slide';

import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { SlideObject } from '../classes/slideObject';
import { TextStyle } from '../classes/textStyle';
import { ImageStyle } from '../classes/imageStyle';

@Component({
  selector: 'slide-editor',
  templateUrl: './slide-editor.component.html',
  styleUrls: ['./slide-editor.component.css']
})

export class SlideEditorComponent implements OnInit {

  // Layout resizer elements
  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('workspace') workspace: ElementRef<any>;
  @ViewChild('controlToolbar') controlToolbar: ElementRef<any>;

  // Slide render variables
  @ViewChild('slideRender') slideRender:ElementRef<any>;
  @ViewChild('slideRenderArea') slideRenderArea:ElementRef<any>;
  slides: Slide[];
  currentSlideIndex: number;
  slideRenderMagnification: number = 50;
  documentSize: object;
  textStyles: TextStyle[];
  imageStyles: ImageStyle[];

  // Slide editor heirarchy variables
  selectedSlideObject: SlideObject;
  showRenderOverflow: boolean = false;

  constructor(private data: DataService, private dialog: DialogService, private slideEditor: SlideEditorAppLogicService, private store:Store<ProjectState>) { }

  ngOnInit() {
    this.enableSlideEditorResizer();

    this.store.select('projectReducer')
    .subscribe(projectState => {
      this.slides = projectState.slides;
      this.currentSlideIndex = projectState.currentSlideIndex;
      this.documentSize = projectState.documentSize;
      this.textStyles = projectState.textStyles;
      this.imageStyles = projectState.imageStyles;
    })
  }

  // Resizer functions
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
    let render = this.slideRender.nativeElement;
    let renderHeight = render.offsetHeight * this.slideRenderMagnification /100;
    let renderWidth = render.clientWidth * this.slideRenderMagnification /100;

    let renderArea = this.slideRenderArea.nativeElement;
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
    let backgroundColor = this.slides[this.currentSlideIndex].getProperty('backgroundColor');
    let width = this.documentSize['width'];
    let height = this.documentSize['height'];

    let render = this.slideRender.nativeElement;
    let renderHeight = render.offsetHeight * this.slideRenderMagnification /100;
    let renderWidth = render.clientWidth * this.slideRenderMagnification /100;

    let renderArea = this.slideRenderArea.nativeElement;
    let renderAreaHeight = renderArea.offsetHeight;
    let renderAreaWidth = renderArea.clientWidth;

    let css = {
      'background': backgroundColor,
      'height': height + 'px',
      'width': width + 'px',
      'transform-origin' : '0 0',
      'transform': 'scale(' + this.slideRenderMagnification / 100 + ')',
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

  getSlideObjectStyle(slideObject:SlideObject) {
    let slideObjectType = slideObject.constructor.name;

    switch(slideObjectType){
      case 'TextObject' :  
        return this.textStyles[0];
      case 'ImageObject' : 
      return this.imageStyles[0];
    }
  }

  // Slide editor control panel functions
  selectObject(slideObject:SlideObject) {
    this.selectedSlideObject = slideObject
  }

  isSlideObjectSelected (slideObject:SlideObject) {
    if(slideObject === this.selectedSlideObject) return true;
    return false;
  }

  // User clicks zoom in/out
  zoom(direction: string) {
    let magnification = this.slideRenderMagnification;
    let increment = 5;

    switch (direction) {
      case 'in':
        if (magnification > 200 - increment) {
          magnification = 200;
        } else {
          magnification += increment;
        }
        this.slideRenderMagnification = magnification;
        break;
      case 'out':
        if (magnification < increment) {
          magnification = 0;
        } else {
          magnification -= increment;
        }
        this.slideRenderMagnification = magnification;
        break;
    }

  }

  // This controls the image size when user inputs a value in the heirarchy
  maintainRatio(slideObject, dimension, value) {
    // Get original aspect ratio of this slide object
    let ratio: number;

    if (slideObject.width || slideObject.height === "auto") {
      // Get ratio 
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
}

