import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { GalleryImage } from "./classes/galleryImage";
import { TextObject } from "./classes/textObject";
import { ImageObject } from "./classes/imageObject";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class SandboxAppLogicService {

  constructor(private http: HttpClient, private data: DataService, private dialog: DialogService) { }

  imageSearchQuery: string = "";
  imageSearchResults;

  pixabayToGallery(url: string) {
    let image = new GalleryImage();
    image.setProperty('url', url);
    image.setProperty('id', this.data.images.length);
    this.data.images.push(image);
    this.dialog.toast('Added to gallery.');
  }

  searchPixabay() {
    let url = 'https://pixabay.com/api/?'
    let apiKey = '7780146-3f3faea2d00a0e8da80a92f14';
    this.http.get(url + 'key=' + apiKey + '&q=' + this.imageSearchQuery).subscribe((res) => {
      this.imageSearchResults = res['hits'];
    });
  }

  addTextObjectToSlide() {
    let currentSlide = this.data.slides[this.data.currentSlideIndex];
    let currentSlideObjects = currentSlide.getProperty('slideObjects');
    let newTextObject = new TextObject();

    newTextObject.setProperty('textValue', this.data.sandboxText);
    newTextObject.setProperty('styleId', this.data.selectedTextStyleId);

    // !important!  set z index after slideObject has been added to the project to ensure proper assignment of z index
    currentSlide.addSlideObject(newTextObject);
    newTextObject.setProperty('zIndex', currentSlideObjects.length - 1);
  }

  addImageObjectToSlide() {
    // Create a new ImageObject using currently selected image and currently selected ImageStyle
    let currentSlide = this.data.slides[this.data.currentSlideIndex];
    let currentSlideObjects = currentSlide.getProperty('slideObjects');
    let newImageObject = new ImageObject();
    let image = this.data.images[this.data.selectedImage].getProperty('url');

    // Check if image is larger than document size
    let imageElement = new Image;
    imageElement.src = image;
    let imageWidth;
    let imageHeight;

    // Scale down if larger than document size
    if (imageElement.width > this.data.documentSize.width) {
      let ratio = imageElement.width / imageElement.height;
      imageWidth = this.data.documentSize.width;
      imageHeight = imageWidth / ratio;
    }

    // Define properties for newImageObject
    newImageObject.setProperty('imagePath', image);
    newImageObject.setProperty('styleId', this.data.selectedImageStyleId);
    newImageObject.setProperty('height', imageHeight);
    newImageObject.setProperty('width', imageWidth);

    // imageElement is no longer needed
    imageElement = null;

    // Add to current slide
    currentSlide.addSlideObject(newImageObject);
    newImageObject.setProperty('zIndex', currentSlideObjects.length - 1);
  }

  uploadImage(event) {
    let file = event.srcElement.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      let url = (<FileReader>e.target).result;
      let image = new GalleryImage();

      image.setProperty('url', url);
      image.setProperty('id', this.data.images.length);
      this.data.images.push(image);
    }
  }

  selectImage(index) {
    this.data.selectedImage = index;
  }

  deleteImageById(imageId: number) {
    let callback = () => {
      for (let i = 0; i < this.data.images.length; i++) {
        if (this.data.images[i].getProperty('id') === imageId) {
          this.data.images.splice(i, 1);
          this.dialog.toast('Image has been deleted.');
        }
      }
    }
    this.dialog.alert("Are you sure you want to delete this image from your project?", 'danger', callback);
  }
}
