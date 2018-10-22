import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Project } from '../classes/project';

import { ImageObject } from '../classes/imageObject';
import { ShapeObject } from '../classes/shapeObject';
import { TextObject } from '../classes/textObject';

import { ImageStyle } from '../classes/imageStyle';
import { ShapeStyle } from '../classes/shapeStyle';
import { TextStyle } from '../classes/textStyle';

import { Slide } from '../classes/slide';
import { BorderControl } from '../classes/borderControl';
import { ShadowControl } from '../classes/shadowControl';



@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {

  }

  isSelected(style) {

    let type = style.constructor.name;
    let response: boolean;

    switch (type) {
      case 'ImageStyle':
        if (style.id === this.data.selectedImageStyleId) {
          response = true;
        } else {
          response = false;
        }
      case 'TextStyle':
        if (style.id === this.data.selectedTextStyleId) {
          response = true;
        } else {
          response = false;
        }
        break;
    }

    return response;
  }
}
