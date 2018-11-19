import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { GalleryImage } from "./classes/galleryImage";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from '@ngrx/store';
import { ProjectState } from './state-management/state/projectState';
import { ADD_TEXTOBJECT, ADD_IMAGEOBJECT, ADD_IMAGE, SELECT_GALLERY_IMAGE, DEL_IMAGE } from './state-management/actions/projectActions';


@Injectable({
  providedIn: 'root'
})
export class SandboxAppLogicService {

  constructor(private http: HttpClient, private data: DataService, private dialog: DialogService, private store:Store<ProjectState>) { }

  /* IMAGE SEARCH VARIABLES  */
  imageSearchQuery: string = "";
  imageSearchResults;
  imageSearchpage:number = 1;

  getProjectState() {
    // Returns a promise with projectState from store
    return new Promise((resolve, reject) => {
      this.store.select('projectReducer')
      .subscribe(projectState => {
        if(!projectState) reject();
        resolve(projectState);
      });
    })
    .catch(error => {console.log(error)});
  }

  pixabayToGallery(url: string) {
    // This function creates a galleryImage object with the search result specified
    // in the parameter and adds it to the project
    this.data.getProjectState().then(projectState => {
      let galleryImage = new GalleryImage();
      galleryImage.url = url;
      galleryImage.id = projectState['images'].length;
      this.store.dispatch({type:ADD_IMAGE, payload: {galleryImage: galleryImage}});
      this.dialog.toast('Added to gallery.');
    })
  }

  searchPixabay() {
    // This function makes a call to the back end to perform image search
    this.imageSearchpage = 1;
    let headers = new HttpHeaders;
    headers = headers.append('search-query', this.imageSearchQuery);
    headers = headers.append('page', '1');

    this.http.get(this.data.apiEndpoint + '/search-pixabay', {headers: headers}).subscribe(res => {
      this.imageSearchResults = res['hits'];
    });
  }

  loadMoreImages(){
    // This function handles pagination for image search results.
    this.imageSearchpage++;
    let headers = new HttpHeaders;
    headers = headers.append('search-query', this.imageSearchQuery);
    headers = headers.append('page', this.imageSearchpage.toString());

    this.http.get(this.data.apiEndpoint + '/search-pixabay', {headers: headers}).subscribe(res => {
      let results = res['hits'];
      results.forEach(result => {
        this.imageSearchResults.push(result);
      })
    });
  }

  addToSlide(type: 'textObject' | 'imageObject') { 
    // This function adds slideObjects to the project
    switch(type){
      case 'textObject': this.store.dispatch({type:ADD_TEXTOBJECT}); break;
      case 'imageObject' : 
   
      this.store.dispatch({type:ADD_IMAGEOBJECT}); break;
    }
  }
   
  uploadImage(event) {
    // This function takes image file from file input, uses it to create a galleryImage, 
    // and adds it to the project.
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
    // This function updates the store with the selected image specified in the parameters
    this.store.dispatch({type:SELECT_GALLERY_IMAGE, payload:{galleryImage: galleryImage}})
  }

  deleteImage(image: GalleryImage) {
    // This function prompts user for confirmation before deleting an image from the project gallery.
    let callback = () => {
      this.store.dispatch({type:DEL_IMAGE, payload: {galleryImage: image}});
    }
    
    this.dialog.alert("Are you sure you want to delete this image from your project?", 'danger', callback);
  }
}
