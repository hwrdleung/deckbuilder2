import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core'
import { DataService } from '../data.service';

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

  constructor(private elementRef: ElementRef, private data: DataService) {}

  ngOnInit() {
    this.enableResizer();
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
