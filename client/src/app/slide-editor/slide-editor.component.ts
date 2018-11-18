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
import { TextObject } from '../classes/textObject';
import { ToolbarAppLogicService } from '../toolbar-app-logic.service';
import { HorizontalResizer } from '../classes/horizontalResizer';

@Component({
  selector: 'slide-editor',
  templateUrl: './slide-editor.component.html',
  styleUrls: ['./slide-editor.component.css']
})

export class SlideEditorComponent implements OnInit {

  /*  UI VARIABLES */
  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('workspace') workspace: ElementRef<any>;
  @ViewChild('controlToolbar') controlToolbar: ElementRef<any>;
  @ViewChild('slideRender') slideRender: ElementRef<any>;
  @ViewChild('slideRenderArea') slideRenderArea: ElementRef<any>;

  /* SLIDE RENDER VARIABLES */
  slides: Slide[];
  currentSlideIndex: number;
  slideRenderMagnification: number = 50;
  documentSize: object;
  textStyles: TextStyle[];
  imageStyles: ImageStyle[];

  /*  SLIDE EDITOR VARIABLES */
  selectedSlideObject: SlideObject;
  showRenderOverflow: boolean = false;

  /*  POPUP TEXT OBJECT EDITOR VARIABLES */
  showTextObjectEditor: boolean = false;
  textEditorTextObject: TextObject;

  constructor(private data: DataService, private toolbar: ToolbarAppLogicService, private dialog: DialogService, private slideEditor: SlideEditorAppLogicService, private store: Store<ProjectState>) { }

  ngOnInit() {
    this.enableSlideEditorResizer();
    this.data.isSlideRenderLoading = false;
    // Subscribe to projectState
    this.store.select('projectReducer')
      .subscribe(projectState => {
        this.slides = projectState.slides;
        this.currentSlideIndex = projectState.currentSlideIndex;
        this.documentSize = projectState.documentSize;
        this.textStyles = projectState.textStyles;
        this.imageStyles = projectState.imageStyles;
      })
  }

  enableSlideEditorResizer() {
    let containerElement = this.workspace.nativeElement;
    let resizerElement = this.resizer.nativeElement;
    let lowerBoundElement = this.controlToolbar.nativeElement;
    let horizontalResizer = new HorizontalResizer(containerElement, resizerElement, lowerBoundElement);
    horizontalResizer.init();
  }

  // Slide editor render functions
  toggleRenderOverflow() {
    // This function is used in the layer heirarchy
    this.showRenderOverflow = !this.showRenderOverflow;
  }

  getSlideRenderCss() {
    // This function provides css for the slide render.
    let backgroundColor = this.slides[this.currentSlideIndex].getProperty('backgroundColor');
    let width = this.documentSize['width'];
    let height = this.documentSize['height'];

    let render = this.slideRender.nativeElement;
    let renderHeight = render.offsetHeight * this.slideRenderMagnification / 100;
    let renderWidth = render.clientWidth * this.slideRenderMagnification / 100;

    let renderArea = this.slideRenderArea.nativeElement;
    let renderAreaHeight = renderArea.offsetHeight;
    let renderAreaWidth = renderArea.clientWidth;

    let css = {
      'background': backgroundColor,
      'height': height + 'px',
      'width': width + 'px',
      'transform-origin': '0 0',
      'transform': 'scale(' + this.slideRenderMagnification / 100 + ')',
      'position': 'absolute',
      'overflow': this.showRenderOverflow ? 'visible' : 'hidden'
    }

    if (renderHeight < renderAreaHeight) {
      css['top'] = (renderAreaHeight - renderHeight) / 2 + 'px';
    }

    if (renderWidth < renderAreaWidth) {
      css['left'] = (renderAreaWidth - renderWidth) / 2 + 'px';
    }
    return css;
  }

  editTextObjectText(textObject: TextObject) {
    // This function specifies the text object whose text value should be edited
    // with the changes in the popup text editor
    this.textEditorTextObject = textObject;
    this.showTextObjectEditor = true;
  }

  saveTextObjectEditor() {
    this.showTextObjectEditor = false;
  }

  // Slide editor control panel functions
  selectObject(slideObject: SlideObject) {
    this.selectedSlideObject = slideObject
  }

  isSlideObjectSelected(slideObject: SlideObject) {
    // This function provides the boolean for the conditional styling in the template's
    // layer heirarchy so that the selected slide object is highlighted
    if (slideObject === this.selectedSlideObject) return true;
    return false;
  }

  renderZoomController() {
    // This function handles the zooming in/out of the slide render 
    // via range input
    let render = this.slideRender.nativeElement;
    let renderHeight = render.offsetHeight * this.slideRenderMagnification / 100;
    let renderWidth = render.clientWidth * this.slideRenderMagnification / 100;

    let renderArea = this.slideRenderArea.nativeElement;
    let renderAreaHeight = renderArea.offsetHeight;
    let renderAreaWidth = renderArea.clientWidth;

    // Keep slide render centered in slide render area when zooming in/out
    if (renderHeight >= renderAreaHeight) {
      renderArea.scrollTop = (renderHeight - renderAreaHeight) / 2;
    }

    if (renderWidth >= renderAreaWidth) {
      renderArea.scrollLeft = (renderWidth - renderAreaWidth) / 2
    }
  }

  zoom(direction: string) {
    // This function handles the zooming in/out of the slide render
    // via zoom in/ zoom out buttons
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

  setDimension(slideObject:SlideObject, dimension: 'height' | 'width', value:number){
    // This function handles changes to the number inputs for slide objects in the layer heirarchy.
    let type = slideObject.constructor.name;
    switch(type){
      case 'ImageObject': this.maintainRatio(slideObject, dimension, value); break;
      case 'TextObject': slideObject[dimension] = value; break;
    }
  }

  maintainRatio(slideObject:SlideObject, dimension: 'height' | 'width', value:number) {
    // This function maintains the aspect ratio of imageObjects when they are
    // resized using the number inputs in the layer heirarchy
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
      // Helper function for maintainRatio()
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

