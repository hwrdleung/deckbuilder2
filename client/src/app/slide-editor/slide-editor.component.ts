import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Slide } from '../classes/slide';

@Component({
  selector: 'slide-editor',
  templateUrl: './slide-editor.component.html',
  styleUrls: ['./slide-editor.component.css']
})
export class SlideEditorComponent implements OnInit {

  slideRenderMagnification: number = 75;
  indexOfSelectedSlideObject : number;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  test(){
    console.log(this.slideRenderMagnification);
  }

// Slide editor Toolbar functions

  createNewSlide() {
    let newSlide = new Slide();
    this.data.slides.push(newSlide);
    this.data.currentSlideIndex = this.data.slides.length-1;
  }

  preview(){
    console.log('Enter preview mode');
  }

  previousSlide(){
    if(this.data.currentSlideIndex > 0){
      this.data.currentSlideIndex--;
    }
  }

  nextSlide(){
    if(this.data.currentSlideIndex < this.data.slides.length-1){
      this.data.currentSlideIndex++;
    }
  }

  deleteCurrentSlide(){
      this.data.slides.splice(this.data.currentSlideIndex, 1);

      if(this.data.currentSlideIndex >= this.data.slides.length){
        this.data.currentSlideIndex--;
      }
  }

  deleteSlideObjectById(id: number){
    let currentSlideObjects = this.data.slides[this.data.currentSlideIndex].getSlideProperty('slideObjects');

    for(let i=0; i<currentSlideObjects.length; i++) {
      if(currentSlideObjects[i].getSlideObjectProperty('id') === id){
        currentSlideObjects.splice(i, 1);
      }
    }
  }

  // Slide editor render functions

  getSlideRenderCss(){
    let slideRenderWidth = this.data.documentSize['width'];
    let slideRenderHeight = this.data.documentSize['height'];
    let backgroundColor = this.data.slides[this.data.currentSlideIndex].getSlideProperty('backgroundColor');

    let css = {
      'background' : backgroundColor,
      'height' : slideRenderHeight + 'px',
      'width' : slideRenderWidth + 'px',
      'transform' : 'scale('+ this.slideRenderMagnification/100 +')'
    }

    return css;
  }

  // Slide editor control panel functions
  selectObject(objectId: number){
    this.indexOfSelectedSlideObject = objectId;
  }

}
