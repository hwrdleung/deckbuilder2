import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HorizontalResizer } from '../classes/horizontalResizer';
import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { TextStyle } from '../classes/textStyle';
import { SandboxAppLogicService } from '../sandbox-app-logic.service';
import { SET_SANDBOXTEXT } from '../state-management/actions/projectActions';

@Component({
  selector: 'text-sandbox',
  templateUrl: './text-sandbox.component.html',
  styleUrls: ['./text-sandbox.component.css']
})
export class TextSandboxComponent implements OnInit {

  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('middlebar') middlebar: ElementRef<any>;
  @ViewChild('container') container: ElementRef<any>;

  sandboxText:string;
  textNotes:string;
  selectedTextStyle:TextStyle;

  previewRenderMagnification:number = 100;
  
  constructor(private store:Store<ProjectState>, private sandbox:SandboxAppLogicService) { }

  ngOnInit() {
    this.enableResizer();
    this.store.select('projectReducer')
    .subscribe(projectState => {
      this.sandboxText = projectState.sandboxText;
      this.selectedTextStyle = projectState.selectedTextStyle;
      this.textNotes = projectState.textNotes;
    })
  }

  enableResizer(){
    let containerElement = this.container.nativeElement;
    let resizerElement = this.resizer.nativeElement;
    let lowerBoundElement = this.middlebar.nativeElement
    let horizontalResizer = new HorizontalResizer(containerElement, resizerElement, lowerBoundElement);
    horizontalResizer.init();
  }

  getPreviewRenderCss(){
    let css = {
      'transform': `scale(${this.previewRenderMagnification/100})`
    }
    return css;
  }

  textInput($event){
    console.log('textInput');
    console.log($event);
    let sandboxText = $event;
    this.store.dispatch({type: SET_SANDBOXTEXT, payload: {sandboxText: sandboxText}});
  }

  // User clicks zoom in/out
  zoom(direction: string) {
    let magnification = this.previewRenderMagnification;
    let increment = 10;
    let maxZoom = 300;

    switch (direction) {
      case 'in':
        if (magnification > maxZoom - increment) {
          magnification = maxZoom;
        } else {
          magnification += increment;
        }
        this.previewRenderMagnification = magnification;
        break;
      case 'out':
        if (magnification < increment) {
          magnification = 0;
        } else {
          magnification -= increment;
        }
        this.previewRenderMagnification = magnification;
        break;
    }
  }

}
