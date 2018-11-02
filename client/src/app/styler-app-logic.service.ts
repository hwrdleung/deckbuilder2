import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { TextStyle } from "./classes/textStyle";
import { ImageStyle } from "./classes/imageStyle";

@Injectable({
  providedIn: 'root'
})
export class StylerAppLogicService {

  constructor(private data: DataService, private dialog: DialogService) { }

  deleteStyle(style: TextStyle | ImageStyle) {
    let styleName = style.getProperty('name');
    let styleType = style.constructor.name;

    switch (this.data.isStyleInUse(style)) {
      case true:
        // Prevent delete and display alert message
        let message = `${styleName} is currently in use.  ${styleType === 'TextStyle' ? 'Text objects' : 'Image objects'} that use this style will be reverted to the default style.  Do you wish to proceed?`;
        this.dialog.alert(message, 'danger', () => {
          this.revertObjectsToDefaultStyle(style);
          this.confirmedDelete(style);
        });
        break;

      case false:
        this.dialog.alert("Delete " + styleName + "?", 'danger', () => {
          this.confirmedDelete(style)
        });
        break;
    }
  }

  revertObjectsToDefaultStyle = (style: TextStyle | ImageStyle) => {
    let id = style.getProperty('id');
    let styleType = style.constructor.name;

    for (let i = 0; i < this.data.slides.length; i++) {
      let thisSlideObjects = this.data.slides[i].getProperty('slideObjects');

      for (let j = 0; j < thisSlideObjects.length; j++) {
        let slideObjectStyleId = thisSlideObjects[j].getProperty('styleId');
        let slideObjectType = thisSlideObjects[j].constructor.name;

        switch (styleType) {
          case 'TextStyle':
            if (slideObjectType === "TextObject" && slideObjectStyleId === id) {
              thisSlideObjects[j].setProperty('styleId', 0);
            }
            break;
          case 'ImageStyle':
            if (slideObjectType === "ImageObject" && slideObjectStyleId === id) {
              thisSlideObjects[j].setProperty('styleId', 0);
            }
            break;
        }
      }
    }
  }

  confirmedDelete = (style: TextStyle | ImageStyle) => {
    let id = style.getProperty('id');
    let styleType = style.constructor.name;

    if (styleType === "TextStyle") {
      for (let i = 0; i < this.data.textStyles.length; i++) {
        let thisId = this.data.textStyles[i].getProperty('id');
        if (this.data.selectedTextStyleId === id) this.data.selectedTextStyleId = 0;
        if (thisId === id) this.data.textStyles.splice(i, 1);
      }
    } else if (styleType === "ImageStyle") {
      for (let i = 0; i < this.data.imageStyles.length; i++) {
        let thisId = this.data.imageStyles[i].getProperty('id');
        if (this.data.selectedImageStyleId === id) this.data.selectedImageStyleId = 0;
        if (thisId === id) this.data.imageStyles.splice(i, 1);
      }
    }
  }

}
