import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";
import { DEL_TEXTSTYLE, DEL_IMAGESTYLE } from './state-management/actions/projectActions';
import { Store } from '@ngrx/store';
import { ProjectState } from './state-management/state/projectState';

@Injectable({
  providedIn: 'root'
})
export class StylerAppLogicService {

  constructor(private data: DataService, private dialog: DialogService, private store: Store<ProjectState>) { }

  deleteStyle = (style: TextStyle | ImageStyle) => {
    this.data.getProjectState()
      .then(projectState => {
        if (!this.isStyleInUse(style, projectState)) this.confirmedDelete(style);
        else console.log('Style is in use.');
      })
      .catch(error => {console.log(error)});
  }

  confirmedDelete = (style: TextStyle | ImageStyle) => {
    let styleType = style.constructor.name;

    switch (styleType) {
      case 'TextStyle': this.store.dispatch({ type: DEL_TEXTSTYLE, payload: { textStyle: style } }); break;
      case 'ImageStyle': this.store.dispatch({ type: DEL_IMAGESTYLE, payload: { imageStyle: style } }); break;
    }
  }



  isStyleInUse = (style: TextStyle | ImageStyle, projectState: object) => {
    let styleType = style.constructor.name;

    let slides = projectState['slides'];
    if (!slides) return false;

    slides.forEach(slide => {
      for (let i = 0; i < slide.slideObjects.length; i++) {
        let slideObject = slide.slideObjects[i];
        let slideObjectType = slideObject.constructor.name;

        switch (styleType) {
          case 'TextStyle': if (slideObjectType === 'TextObject' && style.id === slideObject.styleId) return true;
          case 'ImageStyle': if (slideObjectType === 'ImageObject' && style.id === slideObject.styleId) return true;
          default: return false;
        }
      }
    });
  }
}
