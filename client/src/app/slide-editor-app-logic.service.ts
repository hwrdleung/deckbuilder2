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
    // This function increases the slideObject's layer position by 1
    this.store.dispatch({ type: SLIDEOBJECT_LAYER_UP, payload: { slideObject: slideObject } });
  }

  layerDown(slideObject: SlideObject) {
    // This function decreases the slideObject's layer position by 1
    this.store.dispatch({ type: SLIDEOBJECT_LAYER_DOWN, payload: { slideObject: slideObject } });
  }

  deleteSlideOjbect(slideObject: SlideObject) {
    // This function deletes slideObject from the slide
    if(slideObject.type === 'ImageObject'){
      this.data.deleteFromFirebase([slideObject['fileName']]);
    }
    this.store.dispatch({type:DEL_SLIDEOBJECT, payload: {slideObject: slideObject}});
    this.dialog.toast(`Deleted ${slideObject.name}`);
  }
}
