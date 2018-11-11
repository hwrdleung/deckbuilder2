import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { ViewChild } from '@angular/core'
import { DialogService } from '../dialog.service';
import { SandboxAppLogicService } from '../sandbox-app-logic.service';
import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { ImageStyle } from '../classes/imageStyle';
import { TextStyle } from '../classes/textStyle';
import { GalleryImage } from '../classes/galleryImage';

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

  // Text view
  textStyles: TextStyle[];
  viewTextElements: boolean;
  sandboxText: string;
  textNotes: string;
  selectedTextStyle: TextStyle;

  // Image view
  viewImageElements: boolean;
  imageStyles: ImageStyle[];
  images: [];
  selectedImageStyle: ImageStyle;
  selectedImage: GalleryImage;

  constructor(private data: DataService, private dialog: DialogService, private sandbox:SandboxAppLogicService, private store:Store<ProjectState>) { }


  ngOnInit() {
  
    this.enableSandboxResizer();

    this.store.select('projectReducer')
    .subscribe(projectState => {
      this.imageStyles = projectState.imageStyles;
      this.textStyles = projectState.textStyles;
      this.viewTextElements = projectState.viewTextElements;
      this.viewImageElements = projectState.viewImageElements;
      this.sandboxText = projectState.sandboxText;
      this.textNotes = projectState.textNotes;
      this.selectedTextStyle = projectState.selectedTextStyle;
      this.selectedImageStyle = projectState.selectedImageStyle;
      this.images = projectState.images;
      this.selectedImage = projectState.selectedImage;
    });
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
