import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('middlebar') middlebar: ElementRef<any>;
  @ViewChild('container') container: ElementRef<any>;


  constructor(private data: DataService) { }


  ngOnInit() {
    this.enableSandboxResizer();
  }

  enableSandboxResizer() {
    let startResize = () => {
      document.addEventListener('mousemove', this.resizeGrid);
      document.addEventListener('mouseup', stopResize);
    }

    let stopResize = () => {
      document.removeEventListener('mousemove', this.resizeGrid);
      document.removeEventListener('mouseup', stopResize);
    }

    let resizer = this.resizer.nativeElement;
    if (resizer) {
      resizer.addEventListener('mousedown', startResize);
    }
  }

  resizeGrid = (e) => {
    let sandboxContainer = this.container.nativeElement;
    let middleBarHeight = this.middlebar.nativeElement.clientHeight;
    let resizer = this.resizer.nativeElement;

    let viewportHeight = document.documentElement.clientHeight;
    let offset = viewportHeight - sandboxContainer.clientHeight;

    let topHeight = e.pageY - offset - resizer.clientHeight / 2;
    let bottomHeight = viewportHeight - e.pageY - resizer.clientHeight / 2;

    if (e.pageY < viewportHeight - middleBarHeight - resizer.clientHeight / 2) {
      sandboxContainer.style.gridTemplateRows = topHeight + 'fr ' + resizer.clientHeight + 'px ' + bottomHeight + 'fr ';
    }
  }



}
