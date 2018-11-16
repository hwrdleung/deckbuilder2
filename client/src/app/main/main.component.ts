import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { DataService } from '../data.service';
import { Store } from "@ngrx/store";
import { UserState } from '../state-management/state/userState';
import { ProjectState } from '../state-management/state/projectState';
import { Toolbar2AppLogicService } from '../toolbar2-app-logic.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('appContainer') appContainer: ElementRef<any>;
  @ViewChild('styler') styler: ElementRef<any>;
  @ViewChild('sandbox') sandbox: ElementRef<any>;
  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('slideEditor') slideEditor: ElementRef<any>;
  viewTextElements:boolean;
  viewImageElements:boolean;
  autoSaveInterval:number = 5 * 60 * 1000;

  constructor(private elementRef: ElementRef, private data: DataService, private store:Store<ProjectState>, private toolbar2:Toolbar2AppLogicService) {}

  ngOnInit() {
    this.enableResizer();

    this.store.select('projectReducer')
    .subscribe(projectState => {
      this.viewTextElements = projectState.viewTextElements;
      this.viewImageElements = projectState.viewImageElements;
    })

    this.autoSave();
  }

  autoSave(){
    if(sessionStorage.getItem('sessionData')) setInterval(this.data.saveProject, this.autoSaveInterval);
  }

  enableResizer = () => {
    let startResize = (e) => {
      document.addEventListener('mousemove', this.resizeGrid);
      document.addEventListener('mouseup', stopResize); // Stop resizer
    }

    let stopResize = (e) => {
      document.removeEventListener('mousemove', this.resizeGrid);
      document.removeEventListener('mouseup', stopResize); // Stop resizer
    }

    this.resizer.nativeElement.addEventListener('mousedown', startResize); // start resizer
  }

  resizeGrid = (e) => {
    let appContainer = this.appContainer.nativeElement;
    let viewportWidth = document.documentElement.clientWidth;

    let styler = this.styler.nativeElement;
    let resizer = this.resizer.nativeElement;

    let sandboxWidth = e.pageX - styler.offsetWidth - resizer.offsetWidth/2;
    let slideEditorWidth = viewportWidth - e.pageX - resizer.offsetWidth/2;

    // Left boundary
    if(e.pageX <= styler.offsetWidth + resizer.offsetWidth){
      sandboxWidth = 0;
    }

    // Right boundary
    if(e.pageX >= viewportWidth - resizer.offsetWidth) {
      slideEditorWidth = 0;
    }

    appContainer.style.gridTemplateColumns = styler.offsetWidth + "px " + sandboxWidth + "fr " + resizer.offsetWidth + "px " + slideEditorWidth + "fr";
  }

}
