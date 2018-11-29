import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { DialogService } from "./dialog.service";
import { GalleryImage } from "./classes/galleryImage";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { ProjectState } from "./state-management/state/projectState";
import {
  ADD_TEXTOBJECT,
  ADD_IMAGEOBJECT,
  ADD_IMAGE,
  SELECT_GALLERY_IMAGE,
  DEL_IMAGE
} from "./state-management/actions/projectActions";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class SandboxAppLogicService {
  constructor(
    private http: HttpClient,
    private data: DataService,
    private dialog: DialogService,
    private store: Store<ProjectState>
  ) {}

  /* IMAGE SEARCH VARIABLES  */
  imageSearchQuery: string = "";
  imageSearchResults;
  imageSearchpage: number = 1;

  getProjectState() {
    // Returns a promise with projectState from store
    return new Promise((resolve, reject) => {
      this.store.select("projectReducer").subscribe(projectState => {
        if (!projectState) reject();
        resolve(projectState);
      });
    }).catch(error => {
      console.log(error);
    });
  }

  pixabayToGallery(url: string) {
    // This function creates a galleryImage object with the search result specified
    // in the parameter and adds it to the project
    this.data.getProjectState().then(projectState => {
      let galleryImage = new GalleryImage();
      galleryImage.url = url;
      galleryImage.id = projectState["images"].length;
      this.store.dispatch({
        type: ADD_IMAGE,
        payload: { galleryImage: galleryImage }
      });
      this.dialog.toast("Added to gallery.");
    });
  }

  searchPixabay() {
    // This function makes a call to the back end to perform image search
    this.imageSearchpage = 1;
    let headers = new HttpHeaders();
    headers = headers.append("search-query", this.imageSearchQuery);
    headers = headers.append("page", "1");

    this.http
      .get(this.data.apiEndpoint + "/search-pixabay", { headers: headers })
      .subscribe(res => {
        this.imageSearchResults = res["hits"];
      });
  }

  loadMoreImages() {
    // This function handles pagination for image search results.
    this.imageSearchpage++;
    let headers = new HttpHeaders();
    headers = headers.append("search-query", this.imageSearchQuery);
    headers = headers.append("page", this.imageSearchpage.toString());

    this.http
      .get(this.data.apiEndpoint + "/search-pixabay", { headers: headers })
      .subscribe(res => {
        let results = res["hits"];
        results.forEach(result => {
          this.imageSearchResults.push(result);
        });
      });
  }

  addToSlide(type: "textObject" | "imageObject") {
    // This function adds slideObjects to the project
    switch (type) {
      case "textObject":
        this.store.dispatch({ type: ADD_TEXTOBJECT });
        break;
      case "imageObject":
        this.data
          .getProjectState()
          .then(data => {
            let projectState: any = data;
            if (!projectState.selectedImage) {
              this.dialog.alert("Select an image from your gallery", "danger");
              throw Error("selectedImage not found.");
            } else if (projectState.selectedImage) {
              return this.data.getUserState();
            }
          })
          .then(data => {
            // Define image naming convention here
            /* username-dateString */
            let userState: any = data;
            let date = new Date();
            let fileName = `${userState.username}-${date.getTime().toString()}`;
            console.log("Filename:", fileName);
            this.store.dispatch({
              type: ADD_IMAGEOBJECT,
              payload: { fileName: fileName }
            });
          })
          .catch(error => console.log(error));
        break;
    }
  }

  uploadImage(event) {
    // This function takes image file from file input, uses it to create a galleryImage,
    // and adds it to the projectState.
    let galleryImage = new GalleryImage();
    let file = event.srcElement.files[0];

    this.data
      .getProjectState()
      .then(projectState => {
        galleryImage.id = projectState["images"].length;
        return this.data.getUserState();
      })
      .then(data => {
        let userState: any = data;
        let date = new Date();
        let fileName = `${userState.username}-${date.getTime().toString()}`;
        galleryImage.fileName = fileName;
        // Upload image to firestore and get the firestore image url
        this.data.initializeFirebase();
        let storageRef = firebase.storage().ref();
        return storageRef.child(`images/${fileName}`).put(file);
      })
      .then(data => {
        return data.ref.getDownloadURL();
      })
      .then(downloadUrl => {
        galleryImage.url = downloadUrl;
        this.store.dispatch({
          type: ADD_IMAGE,
          payload: { galleryImage: galleryImage }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  selectImage(galleryImage: GalleryImage) {
    // This function updates the store with the selected image specified in the parameters
    this.store.dispatch({
      type: SELECT_GALLERY_IMAGE,
      payload: { galleryImage: galleryImage }
    });
  }

  deleteImage(image: GalleryImage) {
    // This function prompts user for confirmation before deleting an image from the project gallery.
    let callback = () => {
      this.data.deleteImageFromFirebase(image.fileName);
      this.store.dispatch({
        type: DEL_IMAGE,
        payload: { galleryImage: image }
      });
    };

    this.dialog.alert(
      "Are you sure you want to delete this image from your project?",
      "danger",
      callback
    );
  }
}
