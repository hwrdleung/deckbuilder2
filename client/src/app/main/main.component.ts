import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { DatePipe } from '@angular/common';
import { DataService } from '../data.service';
import { Store } from "@ngrx/store";
import { UserState } from '../state-management/state/userState';
import { ProjectState } from '../state-management/state/projectState';
import { Toolbar2AppLogicService } from '../toolbar2-app-logic.service';
import { DialogService } from '../dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  /*  UI LAYOUT VARIABLES  */
  @ViewChild('appContainer') appContainer: ElementRef<any>;
  @ViewChild('styler') styler: ElementRef<any>;
  @ViewChild('sandbox') sandbox: ElementRef<any>;
  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('slideEditor') slideEditor: ElementRef<any>;
  viewTextElements: boolean;
  viewImageElements: boolean;

  autoSaveInterval: number = 5 * 60 * 1000;

  constructor(private datePipe: DatePipe, private router:Router, private elementRef: ElementRef, private data: DataService, private store: Store<ProjectState>, private dialog: DialogService, private toolbar2: Toolbar2AppLogicService) { }

  ngOnInit() {
    // Detect screen width and route to preview component for mobile devices
    if(window.innerWidth <= 800) this.router.navigate(['main/preview']);

    this.enableResizer();
    // Subscribe to projectState
    this.store.select('projectReducer')
      .subscribe(projectState => {
        this.viewTextElements = projectState.viewTextElements;
        this.viewImageElements = projectState.viewImageElements;
      })
    this.data.saveProject().then(res => {
      if (!res['success']) this.dialog.alert('There was a problem saving your project.', 'danger');
    })
    .catch(error => console.log(error));
    this.enableAutoSave();
  }

  ngOnDestory() {
    // Save project when user navigates away
    this.data.saveProject().then(res => {
      if (!res['success']) this.dialog.alert('There was a problem saving your project.', 'danger');
      if (res['success']) this.dialog.toast('Your project has been saved');
    });
  }

  enableAutoSave() {
    if (sessionStorage.getItem('sessionData')) {
      setInterval(() => {
        this.data.saveProject().then(res => {
          if (res['success']) this.dialog.toast('Auto-saved at ' + this.datePipe.transform(new Date(), 'shortTime'));
        });
      }, this.autoSaveInterval);
    }
  }

  enableResizer = () => {
    // This function enables the vertical resizer between the sandbox and slide editor
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
    // This function sets the widths of the sandbox and slide editor 
    // by setting the container element's gridTemplateColumns according to mouse position 
    let appContainer = this.appContainer.nativeElement;
    let viewportWidth = document.documentElement.clientWidth;

    let styler = this.styler.nativeElement;
    let resizer = this.resizer.nativeElement;

    let sandboxWidth = e.pageX - styler.offsetWidth - resizer.offsetWidth / 2;
    let slideEditorWidth = viewportWidth - e.pageX - resizer.offsetWidth / 2;

    // Left boundary
    if (e.pageX <= styler.offsetWidth + resizer.offsetWidth) {
      sandboxWidth = 0;
    }

    // Right boundary
    if (e.pageX >= viewportWidth - resizer.offsetWidth) {
      slideEditorWidth = 0;
    }
    appContainer.style.gridTemplateColumns = styler.offsetWidth + "px " + sandboxWidth + "fr " + resizer.offsetWidth + "px " + slideEditorWidth + "fr";
  }

}
