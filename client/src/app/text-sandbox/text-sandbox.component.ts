import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HorizontalResizer } from '../classes/horizontalResizer';
import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { TextStyle } from '../classes/textStyle';
import { SandboxAppLogicService } from '../sandbox-app-logic.service';

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

}
