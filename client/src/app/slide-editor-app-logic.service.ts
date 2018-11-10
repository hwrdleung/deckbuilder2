import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { SlideObject } from './classes/slideObject';
import { Store } from '@ngrx/store';
import { ProjectState } from './state-management/state/projectState';
import { SLIDEOBJECT_LAYER_UP, SLIDEOBJECT_LAYER_DOWN, DEL_SLIDEOBJECT } from './state-management/actions/projectActions';

@Injectable({
  providedIn: 'root'
})
export class SlideEditorAppLogicService {

  constructor(private data: DataService, private dialog: DialogService, private store: Store<ProjectState>) { }

  layerUp(slideObject: SlideObject) {
    this.store.dispatch({ type: SLIDEOBJECT_LAYER_UP, payload: { slideObject: slideObject } });
  }

  layerDown(slideObject: SlideObject) {
    this.store.dispatch({ type: SLIDEOBJECT_LAYER_DOWN, payload: { slideObject: slideObject } });
  }

  deleteSlideOjbect(slideObject: SlideObject) {
    this.store.dispatch({type:DEL_SLIDEOBJECT, payload: {slideObject: slideObject}});
  }
}
