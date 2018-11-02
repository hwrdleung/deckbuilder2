import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ViewChild } from '@angular/core'
import { GalleryImage } from "../classes/galleryImage";
import { DialogService } from '../dialog.service';


@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('middlebar') middlebar: ElementRef<any>;
  @ViewChild('container') container: ElementRef<any>;
  isGalleryMode: boolean = true;

  constructor(private data: DataService, private dialog: DialogService) { }


  ngOnInit() {
    this.enableSandboxResizer();
  }

  showGallery(){
    this.isGalleryMode = true;
  }

  showSearchResults(){
    this.isGalleryMode = false;
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
      // Resizer is rendered based on *ngIf condition
      // Wrapping in an IF statement prevents the following line
      // from running before the resizer has rendered.
      resizer.addEventListener('mousedown', startResize);
    }
  }

  resizeGrid = (e) => {
    let sandboxContainer = this.container.nativeElement;
    let middlebar = this.middlebar.nativeElement;
    let resizer = this.resizer.nativeElement;

    let viewportHeight = document.documentElement.offsetHeight;
    let offset = viewportHeight - sandboxContainer.offsetHeight;

    let topHeight = e.pageY - offset - resizer.offsetHeight / 2;
    let bottomHeight = viewportHeight - e.pageY - resizer.offsetHeight / 2;

    sandboxContainer.style.gridTemplateRows = topHeight + 'fr ' + resizer.offsetHeight + 'px ' + bottomHeight + 'fr';
  
    // Upper boundary 
    if(e.pageY < offset + resizer.offsetHeight / 2){
      sandboxContainer.style.gridTemplateRows = '0px ' + resizer.offsetHeight + 'px ' + '1fr';
    }

    // Lower boundary
    if(e.pageY >= viewportHeight - resizer.offsetHeight/2 -  middlebar.offsetHeight){
      sandboxContainer.style.gridTemplateRows = '1fr ' + resizer.offsetHeight + 'px ' + middlebar.offsetHeight + 'px';
    }
  }



}
