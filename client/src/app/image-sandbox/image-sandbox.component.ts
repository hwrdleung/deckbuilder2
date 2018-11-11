import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HorizontalResizer } from '../classes/horizontalResizer';
import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';
import { GalleryImage } from '../classes/galleryImage';
import { ImageStyle } from '../classes/imageStyle';
import { SandboxAppLogicService } from '../sandbox-app-logic.service';


@Component({
  selector: 'image-sandbox',
  templateUrl: './image-sandbox.component.html',
  styleUrls: ['./image-sandbox.component.css']
})
export class ImageSandboxComponent implements OnInit {

  @ViewChild('resizer') resizer: ElementRef<any>;
  @ViewChild('middlebar') middlebar: ElementRef<any>;
  @ViewChild('container') container: ElementRef<any>;

  selectedImage: GalleryImage;
  selectedImageStyle: ImageStyle;
  images: GalleryImage[];

  viewGallery: boolean = true;
  viewSearchResults: boolean = false;

  constructor(private store: Store<ProjectState>, private sandbox:SandboxAppLogicService) { }


  ngOnInit() {
    this.enableResizer();

    this.store.select('projectReducer')
      .subscribe(projectState => {
        this.selectedImage = projectState.selectedImage;
        this.selectedImageStyle = projectState.selectedImageStyle;
        this.images = projectState.images;
      })
  }

  showContent(view: string) {
    switch (view) {
      case 'gallery':
        this.viewGallery = true;
        this.viewSearchResults = false;
        break;
      case 'search':
        this.viewGallery = false;
        this.viewSearchResults = true;
        break;
    }
  }

  enableResizer() {
    let containerElement = this.container.nativeElement;
    let resizerElement = this.resizer.nativeElement;
    let lowerBoundElement = this.middlebar.nativeElement
    let horizontalResizer = new HorizontalResizer(containerElement, resizerElement, lowerBoundElement);
    horizontalResizer.init();
  }
}
