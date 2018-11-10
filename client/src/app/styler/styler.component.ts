import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StylerAppLogicService } from '../styler-app-logic.service';

import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { ImageStyle } from '../classes/imageStyle';
import { TextStyle } from '../classes/textStyle';

@Component({
  selector: 'styler',
  templateUrl: './styler.component.html',
  styleUrls: ['./styler.component.css']
})
export class StylerComponent implements OnInit {

  imageStyles: ImageStyle[];
  textStyles: TextStyle[];
  viewTextElements: boolean;
  viewImageElements: boolean;

  constructor(private data: DataService, private styler:StylerAppLogicService, private store:Store<ProjectState>) { }

  ngOnInit() {

    this.store.select('projectReducer')
    .subscribe(projectState => {
      this.imageStyles = projectState.imageStyles;
      this.textStyles = projectState.textStyles;
      this.viewTextElements = projectState.viewTextElements;
      this.viewImageElements = projectState.viewImageElements;
    });

  }

  test(){
    console.log('imageStyles:', this.imageStyles)
    console.log('textStyles:', this.textStyles)
    console.log('viewTextElements:', this.viewTextElements)
    console.log('viewImageElements:', this.viewImageElements)

  }

  getCpPosition(){
    return "right";
  }

}
