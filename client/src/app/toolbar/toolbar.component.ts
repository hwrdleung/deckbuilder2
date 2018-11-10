import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToolbarAppLogicService } from '../toolbar-app-logic.service';

import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { ImageStyle } from '../classes/imageStyle';
import { TextStyle } from '../classes/textStyle';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  imageStyles: ImageStyle[];
  textStyles: TextStyle[];
  viewTextElements: boolean;
  viewImageElements: boolean;
  selectedTextStyle: TextStyle;
  selectedImageStyle: ImageStyle;

  constructor(private data: DataService, private toolbar: ToolbarAppLogicService, private store: Store<ProjectState>) { }

  ngOnInit() {
    this.store.select('projectReducer')
      .subscribe(projectState => {
        this.imageStyles = projectState.imageStyles;
        this.textStyles = projectState.textStyles;
        this.viewTextElements = projectState.viewTextElements;
        this.viewImageElements = projectState.viewImageElements;
        this.selectedTextStyle = projectState.selectedTextStyle;
        this.selectedImageStyle = projectState.selectedImageStyle;
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
