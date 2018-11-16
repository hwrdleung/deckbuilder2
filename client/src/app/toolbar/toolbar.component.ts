import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';

import { ToolbarAppLogicService } from '../toolbar-app-logic.service';


import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { ImageStyle } from '../classes/imageStyle';
import { TextStyle } from '../classes/textStyle';
import { Slide } from '../classes/slide';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  sessionData;
  imageStyles: ImageStyle[];
  textStyles: TextStyle[];
  viewTextElements: boolean;
  viewImageElements: boolean;
  selectedTextStyle: TextStyle;
  selectedImageStyle: ImageStyle;
  slides: Slide[];
  currentSlideIndex: number;

  constructor(private data: DataService, private dialog:DialogService, private toolbar: ToolbarAppLogicService, private store: Store<ProjectState>) { }

  ngOnInit() {

    this.sessionData = sessionStorage.getItem('sessionData');

    this.store.select('projectReducer')
      .subscribe(projectState => {
        this.imageStyles = projectState.imageStyles;
        this.textStyles = projectState.textStyles;
        this.viewTextElements = projectState.viewTextElements;
        this.viewImageElements = projectState.viewImageElements;
        this.selectedTextStyle = projectState.selectedTextStyle;
        this.selectedImageStyle = projectState.selectedImageStyle;
        this.slides = projectState.slides;
        this.currentSlideIndex = projectState.currentSlideIndex;
      });
  }

  isSelected(style: ImageStyle | TextStyle) {
    let styleType = style.constructor.name;
    switch (styleType) {
      case 'TextStyle':
        if (style === this.selectedTextStyle) return true;
        return false;
      case 'ImageStyle':
        if (style === this.selectedImageStyle) return true;
        return false;
    }
  }

  





}
