import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'slide-editor',
  templateUrl: './slide-editor.component.html',
  styleUrls: ['./slide-editor.component.css']
})
export class SlideEditorComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getSlideRenderCss(){

    // TODO: EDIT THIS FUNCTION SO THAT IT RETURNS A HEIGHT DYNAMICALLY BASED ON
    // THE USER'S CHOSEN DOCUMENT SIZE

    let slideRenderWidth = document.querySelector('#slide-render-container').clientWidth * 0.9;
    let slideRenderHeight = slideRenderWidth * (9/16);

    let css = {
      'height' : slideRenderHeight + 'px',
      'width' : slideRenderWidth + 'px'
    }

    return css;
  }

}
