import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { Store } from '@ngrx/store';
import { ProjectState } from './state-management/state/projectState';
import { ADD_SLIDE, PREV_SLIDE, NEXT_SLIDE, DEL_SLIDE, SET_MODE } from './state-management/actions/projectActions';


@Injectable({
  providedIn: 'root'
})
export class Toolbar2AppLogicService {

  projectState;
  isPreviewMode: boolean = false;

  constructor(private data: DataService, private dialog: DialogService, private store: Store<ProjectState>) { }

  newTextObject() {
    this.store.dispatch({ type: SET_MODE, payload: { mode: 'text' } });
  }

  newImageObject() {
    this.store.dispatch({ type: SET_MODE, payload: { mode: 'image' } });
  }

  newSlide() {
    this.store.dispatch({ type: ADD_SLIDE });
  }

  prevSlide() {
    this.store.dispatch({ type: PREV_SLIDE });
  }

  nextSlide() {
    this.store.dispatch({ type: NEXT_SLIDE });
  }

  deleteSlide() {
    this.data.getProjectState().then(projectState => {
      if (projectState['slides'].length > 1) {
        let message = 'Are you sure you want to delete this slide?';
        this.dialog.alert(message, 'danger', () => {
          this.store.dispatch({ type: DEL_SLIDE });
        });
      }
    })
  }

  preview() {
    this.isPreviewMode = true;
  }

}
