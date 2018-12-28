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

  /*  UI LAYOUT VARIABLES  */
  imageStyles: ImageStyle[];
  textStyles: TextStyle[];
  viewTextElements: boolean;
  viewImageElements: boolean;

    /*  NGRX STORE SUBSCRIPTION  */
    projectStateSubscription;

  constructor(public data: DataService, public styler: StylerAppLogicService, public store: Store<ProjectState>) { }

  ngOnInit() {
    this.projectStateSubscription = this.store.select("projectReducer").subscribe(projectState => {
        // Get UI variables from dataService
        this.imageStyles = projectState.imageStyles;
        this.textStyles = projectState.textStyles;
        this.viewTextElements = projectState.viewTextElements;
        this.viewImageElements = projectState.viewImageElements;
    });
  }

  ngOnDestroy() {
    this.projectStateSubscription.unsubscribe();
  }

  getCpPosition() {
    // Helper function for colorPicker
    // TODO:  smart positioning of colorPicker based on its offets
    return "right";
  }

}
