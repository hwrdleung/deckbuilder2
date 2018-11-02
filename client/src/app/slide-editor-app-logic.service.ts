import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class SlideEditorAppLogicService {

  constructor(private data: DataService, private dialog: DialogService) { }

  increaseOneLayer(objectId: number) {
    // Locate object in currentSlideObjects
    let currentSlide = this.data.slides[this.data.currentSlideIndex];
    let currentSlideObjects = currentSlide.getProperty('slideObjects');
  
    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].id === objectId && currentSlideObjects[i].zIndex < currentSlideObjects.length - 1) {
        currentSlideObjects[i].zIndex++; // Increment zIndex of currentSlideObjects[i]
        currentSlideObjects[i + 1].zIndex--; // Derement zIndex of currentSlideObjects[i+1]
        // Switch positions of [i] and [i+1]
        let tempStorage = currentSlideObjects[i];
        currentSlideObjects[i] = currentSlideObjects[i + 1];
        currentSlideObjects[i + 1] = tempStorage;
        i++; // Increment i to prevent the code from entering the if statement on the next iteration
      }
    }
  }
  
  decreaseOneLayer(objectId: number) {
    // Locate object in currentSlideObjects
    let currentSlide = this.data.slides[this.data.currentSlideIndex];
    let currentSlideObjects = currentSlide.getProperty('slideObjects');
  
    for (let i = 0; i < currentSlideObjects.length; i++) {
      if (currentSlideObjects[i].id === objectId && currentSlideObjects[i].zIndex > 0) {
        currentSlideObjects[i].zIndex--; // Increment zIndex of currentSlideObjects[i]
        currentSlideObjects[i - 1].zIndex++; // Derement zIndex of currentSlideObjects[i+1]
        // Switch positions of [i] and [i+1]
        let tempStorage = currentSlideObjects[i];
        currentSlideObjects[i] = currentSlideObjects[i - 1];
        currentSlideObjects[i - 1] = tempStorage;
      }
    }
}
}
