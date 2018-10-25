import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('appContainer') appContainer: ElementRef<any>;
  @ViewChild('styler') styler: ElementRef<any>;
  @ViewChild('sandbox') sandbox: ElementRef<any>;
  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('slideEditor') slideEditor: ElementRef<any>;

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.enableResizer();
  }

  enableResizer = () => {
    let startResize = (e) => {
      console.log(e);
      document.addEventListener('mousemove', this.resizeGrid);
      document.addEventListener('mouseup', stopResize); // Stop resizer

      // console.log(this.stylerWidth, this.sandboxWidth, this.resizerWidth, this.slideEditorWidth);
    }

    let stopResize = (e) => {
      console.log(e);
      document.removeEventListener('mousemove', this.resizeGrid);
      document.removeEventListener('mouseup', stopResize); // Stop resizer
    }

    this.resizer.nativeElement.addEventListener('mousedown', startResize); // start resizer
  }

  resizeGrid = (e) => {
    let viewportWidth = document.documentElement.clientWidth;
    let mousePositionX = e.pageX;
    let stylerWidth = this.styler.nativeElement.getBoundingClientRect().width;
    let resizerWidth = this.resizer.nativeElement.getBoundingClientRect().width;
    let sandboxWidth = mousePositionX - stylerWidth - resizerWidth/2;
    let slideEditorWidth = viewportWidth - mousePositionX - resizerWidth/2;

    if(mousePositionX < stylerWidth){
      sandboxWidth = 0;
    }

    if(mousePositionX > viewportWidth) {
      slideEditorWidth = 0;
    }

    let gridTemplateColumns = stylerWidth + "px " + sandboxWidth + "fr " + resizerWidth + "px " + slideEditorWidth + "fr";
    this.appContainer.nativeElement.style.gridTemplateColumns = gridTemplateColumns;
  }









}

