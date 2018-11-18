import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';
import { Toolbar2AppLogicService } from '../toolbar2-app-logic.service';
import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { Slide } from '../classes/slide';

@Component({
  selector: 'toolbar-secondary',
  templateUrl: './toolbar-secondary.component.html',
  styleUrls: ['./toolbar-secondary.component.css']
})
export class ToolbarSecondaryComponent implements OnInit {

  /*  UI LAYOUT VARIABLES */
  slides: Slide[];
  currentSlideIndex;

  constructor(private data: DataService, private dialog: DialogService, private toolbar2: Toolbar2AppLogicService, private store: Store<ProjectState>) { }

  ngOnInit() {
    this.store.select('projectReducer')
      .subscribe(projectState => {
        this.slides = projectState.slides;
        this.currentSlideIndex = projectState.currentSlideIndex;
      })
  }





}
