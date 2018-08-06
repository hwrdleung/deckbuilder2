import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Project } from '../classes/project';

import { ImageObject } from '../classes/imageObject';
import { ShapeObject } from '../classes/shapeObject';
import { TextObject } from '../classes/textObject';

import { ImageStyle } from '../classes/imageStyle';
import { ShapeStyle } from '../classes/shapeStyle';
import { TextStyle } from '../classes/textStyle';

import { Slide } from '../classes/slide';
import { BorderControl } from '../classes/borderControl';
import { ShadowControl } from '../classes/shadowControl';



@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    // Check local storage for data from previous session
    let deckbuilder2Data = JSON.parse(localStorage.getItem('deckbuilder2Data'));   

    if(deckbuilder2Data){
    // load
      let project = new Project();
      project.clearContents();

     // Create image styles based on deckbuilder2Data JSON object
     for(let i=0; i<deckbuilder2Data.textStyles.length; i++){
       let newTextStyle = new TextStyle();
       // Populate this textStyle's variables with data from deckbuilder2Data.textStyles[i]
       for(let key in deckbuilder2Data.textStyles[i]){
          newTextStyle.setStyleProperty(key, deckbuilder2Data.textStyles[i][key]);
       }

       // Load borders
       newTextStyle.setStyleProperty('border', new BorderControl());
       let newTextStyleBorder = newTextStyle.getStyleProperty('border');

       for(let key in deckbuilder2Data.textStyles[i].border){
         newTextStyleBorder.setBorderProperty(key, deckbuilder2Data.textStyles[i].border[key]);
       }

       // Load shadows
       newTextStyle.setStyleProperty('textShadow', new ShadowControl());
       let newTextStyleShadow = newTextStyle.getStyleProperty('textShadow');

       for(let key in deckbuilder2Data.textStyles[i].textShadow){
        newTextStyleShadow.setShadowProperty(key, deckbuilder2Data.textStyles[i].textShadow[key]);
      }
       project.addTextStyle(newTextStyle);
     }
     
    // Create slides based on deckbuilder2Data JSON object
     for(let i=0; i<deckbuilder2Data.slides.length; i++){
       let newSlide = new Slide();
       for(let key in deckbuilder2Data.slides[i]){
         newSlide.setSlideProperty(key, deckbuilder2Data.slides[i][key]);
       }

       // Create all slide objects for this slide based on deckbuilder2Data JSON object
       newSlide.clearSlideObjects();
       for(let j=0; j < deckbuilder2Data.slides[i].slideObjects.length; j++){
        let newTextObject = new TextObject();
        for(let key in deckbuilder2Data.slides[i].slideObjects[j]){
          newTextObject.setTextObjectProperty(key, deckbuilder2Data.slides[i].slideObjects[j][key])
        }
        newSlide.addSlideObject(newTextObject);
       }
  
       project.addSlide(newSlide);
     }

     this.data.loadProject(project);

    } else if (!deckbuilder2Data){
      // Load a new project
      this.data.loadProject(new Project());
    }

  }

}
