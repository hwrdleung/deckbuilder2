import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { GalleryImage } from "./classes/galleryImage";
import { TextObject } from "./classes/textObject";
import { ImageObject } from "./classes/imageObject";
import { HttpClient } from "@angular/common/http";
import { Store } from '@ngrx/store';
import { ProjectState } from './state-management/state/projectState';
import { ADD_TEXTOBJECT, ADD_IMAGEOBJECT, ADD_IMAGE, SELECT_GALLERY_IMAGE } from './state-management/actions/projectActions';


@Injectable({
  providedIn: 'root'
})
export class SandboxAppLogicService {

  constructor(private http: HttpClient, private data: DataService, private dialog: DialogService, private store:Store<ProjectState>) { }

  imageSearchQuery: string = "";
  imageSearchResults;

  getProjectState() {
    return new Promise((resolve, reject) => {
      this.store.select('projectReducer')
      .subscribe(projectState => {
        if(!projectState) reject();
        resolve(projectState);
      })
    })
    .catch(error => {console.log(error)});
  }

  pixabayToGallery(url: string) {
    this.data.getProjectState().then(projectState => {
      let galleryImage = new GalleryImage();
      galleryImage.url = url;
      galleryImage.id = projectState['images'].length;
      this.store.dispatch({type:ADD_IMAGE, payload: {galleryImage: galleryImage}});
      this.dialog.toast('Added to gallery.');
    })
  }

  searchPixabay() {
    let url = 'https://pixabay.com/api/?'
    let apiKey = '7780146-3f3faea2d00a0e8da80a92f14';
    this.http.get(url + 'key=' + apiKey + '&q=' + this.imageSearchQuery).subscribe((res) => {
      this.imageSearchResults = res['hits'];
    });
  }

  addToSlide(type: 'textObject' | 'imageObject') { 
    switch(type){
      case 'textObject': this.store.dispatch({type:ADD_TEXTOBJECT}); break;
      case 'imageObject' : this.store.dispatch({type:ADD_IMAGEOBJECT}); break;
    }
  }

  uploadImage(event) {
    let file = event.srcElement.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      let url = (<FileReader>e.target).result;
      this.data.getProjectState().then(projectState => {
        let galleryImage = new GalleryImage();

        galleryImage.url = url.toString();
        galleryImage.id = projectState['images'].length;
        this.store.dispatch({type:ADD_IMAGE, payload: {galleryImage: galleryImage}});
      })
      .catch(error => {console.log(error)});
    }
  }

  selectImage(galleryImage: GalleryImage) {
    this.store.dispatch({type:SELECT_GALLERY_IMAGE, payload:{galleryImage: galleryImage}})
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
