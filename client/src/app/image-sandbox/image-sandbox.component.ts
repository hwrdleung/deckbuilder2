import { Component, OnInit, ElementRef } from "@angular/core";
import { ViewChild } from "@angular/core";
import { HorizontalResizer } from "../classes/horizontalResizer";
import { Store } from "@ngrx/store";
import { ProjectState } from "../state-management/state/projectState";
import { GalleryImage } from "../classes/galleryImage";
import { ImageStyle } from "../classes/imageStyle";
import { SandboxAppLogicService } from "../sandbox-app-logic.service";
declare var Caman: any;
import * as firebase from "firebase";
import { DataService } from "../data.service";

@Component({
  selector: "image-sandbox",
  templateUrl: "./image-sandbox.component.html",
  styleUrls: ["./image-sandbox.component.css"]
})
export class ImageSandboxComponent implements OnInit {
  /*  UI LAYOUT VARIABLES  */
  @ViewChild("resizer") resizer: ElementRef<any>;
  @ViewChild("middlebar") middlebar: ElementRef<any>;
  @ViewChild("container") container: ElementRef<any>;

  /* TEMPLATE VARIABLES */
  selectedImage: GalleryImage;
  selectedImageStyle: ImageStyle;
  images: GalleryImage[];
  viewGallery: boolean = true;
  viewSearchResults: boolean = false;
  previewRenderMagnification: number = 100;

  /*  NGRX STORE SUBSCRIPTION  */
  projectStateSubscription;

  constructor(
    private store: Store<ProjectState>,
    private data: DataService,
    private sandbox: SandboxAppLogicService
  ) {}

  ngOnInit() {
    this.enableResizer();
    this.data.initializeFirebase();
    // Get UI variables from store
    this.projectStateSubscription = this.store.select("projectReducer").subscribe(projectState => {
      this.selectedImage = projectState.selectedImage;
      this.selectedImageStyle = projectState.selectedImageStyle;
      this.images = projectState.images;
    })
  }

  ngOnDestroy() {
    this.sandbox.imageSearchResults = null;
    this.projectStateSubscription.unsubscribe();
  }

  showContent(view: string) {
    switch (view) {
      case "gallery":
        this.viewGallery = true;
        this.viewSearchResults = false;
        break;
      case "search":
        this.viewGallery = false;
        this.viewSearchResults = true;
        break;
    }
  }

  enableResizer() {
    // This function enables the draggable resizable layout
    let containerElement = this.container.nativeElement;
    let resizerElement = this.resizer.nativeElement;
    let lowerBoundElement = this.middlebar.nativeElement;
    let horizontalResizer = new HorizontalResizer(
      containerElement,
      resizerElement,
      lowerBoundElement
    );
    horizontalResizer.init();
  }

  getPreviewRenderCss() {
    // This function allows zooming in and out for the sandbox
    let css = {
      transform: `scale(${this.previewRenderMagnification / 100})`
    };
    return css;
  }

  zoom(direction: string) {
    // This function handles the clicking of the zoom in/ zoom out buttons in the sandbox
    let magnification = this.previewRenderMagnification;
    let increment = 10;
    let maxZoom = 300;

    switch (direction) {
      case "in":
        if (magnification > maxZoom - increment) {
          magnification = maxZoom;
        } else {
          magnification += increment;
        }
        this.previewRenderMagnification = magnification;
        break;
      case "out":
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
