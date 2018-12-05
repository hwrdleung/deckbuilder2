import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { DialogService } from "./dialog.service";
import { GalleryImage } from "./classes/galleryImage";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { ProjectState } from "./state-management/state/projectState";
import { ImageStyle } from "./classes/imageStyle";
declare var Caman: any;

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

  pixabayToGallery(url: string) {
    // This function creates a galleryImage object with the search result specified
    // in the parameter and adds it to the project
    let galleryImage = new GalleryImage();
    galleryImage.url = url;
    galleryImage.id = this.data.projectState["images"].length;
    this.store.dispatch({
      type: ADD_IMAGE,
      payload: { galleryImage: galleryImage }
    });
    this.dialog.toast("Added to gallery.");
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

  toDataUrl = (url: string, imageStyle: ImageStyle) => {
    return new Promise((resolve, reject) => {
      var image = new Image();
      image.crossOrigin = "anonymous";
      image.src = url;

      image.onload = function() {
        var div = document.createElement("div");
        div.appendChild(image);
        // This function applies the style settings specifed in the selectedImageStyle
        // to the selectedImage via CamanJS, and returns a promise containing the edited image as base64 string
        Caman(image, function() {
          // this.brightness(imageStyle.brightness - 100);
          this.brightness(-100);
          this.render(function() {
            console.log("getDataUrl completed");
            resolve(this.toBase64());
          });
        });
      };
    });
  };

  addToSlide(type: "textObject" | "imageObject") {
    // This function adds slideObjects to the project
    switch (type) {
      case "textObject":
        this.store.dispatch({ type: ADD_TEXTOBJECT });
        break;
      case "imageObject":
        /*
        1.  Get selectedImage and selectedImageStyle from projectState
        2.  Use camanJS to generate dataURL of selctedImage with selectedImageStyle applied to it
        3.  Upload to firebase via backend api, and get firebase image url
        4.  Invoke ngrx action ADD_IMAGEOBJECT, passing in the fileName and firebase image url in the payload
      */

        let getProjectState = () => {
          return new Promise((resolve, reject) => {
            this.store.select("projectReducer").subscribe(projectState => {
              resolve(projectState);
            });
          });
        };

        getProjectState().then(res => {
          let projectState: any = res;
          return this.toDataUrl(
            projectState.selectedImage.url,
            projectState.selectedImageStyle
          );
        })
          .then(res => {
            let date = new Date();
            let imgDataUrl = res;
            let body = {
              token: this.data.userState.token,
              dataUrl: imgDataUrl,
              fileName: `${
                this.data.userState.username
              }-${date.getTime().toString()}`
            };
            return this.http
              .post(this.data.apiEndpoint + "/upload-image", body)
              .subscribe(res => {
                console.log(res);
                let uploadData:any = res
                let payload = {
                fileName: uploadData.body.fileName,
                url: uploadData.body.url
              }
              this.store.dispatch({type: ADD_IMAGEOBJECT, payload: payload});
              })
          })
          // .then(res => {
            /*
            Set up /upload-image endpoint to return data in the follow format:
            res = {
              fileName: fileName,
              url: firebaseImgUrl
            }
          */
            //  let uploadData = res;
            //   let payload = {
            //     fileName: uploadData.body.fileName,
            //     url: uploadData.body.url
            //   }
            //   this.store.dispatch({type: ADD_IMAGEOBJECT, payload: payload});
          // })
          .catch(error => {
            console.log(error);
          });

        // this.data
        //   .getProjectState()
        //   .then(data => {
        //     let projectState: any = data;
        //     if (!projectState.selectedImage) {
        //       this.dialog.alert("Select an image from your gallery", "danger");
        //       throw Error("selectedImage not found.");
        //       // End promise chain
        //     } else if (projectState.selectedImage) {
        //       return this.toDataUrl(
        //         projectState.selectedImage.url,
        //         projectState.selectedImageStyle
        //       );
        //     }
        //   })
        //   .then(imgDataUrl => {
        //     // upload to firebase and get firebase image url
        //     // Create imageObject with image url
        //     // set imageObject fileName, url, send to reducer
        //     // Reducer wil add the new imageObject to project state
        //     let body = {
        //       dataUrl : imgDataUrl,
        //       fileName : `${this.data.userState.username}-${date.getTime().toString()}`,

        //     }
        //     this.http.post(this.data.apiEndpoint + '/upload-image', body).subscribe(res =>{
        //       console.log(res);
        //     })
        //     return this.data.getUserState();
        //   })
        //   .then(data => {
        //     // Define image naming convention here
        //     /* username-dateString */
        //     let userState: any = data;
        //     let fileName = `${userState.username}-${date.getTime().toString()}`;
        //     console.log("Filename:", fileName);
        //     this.store.dispatch({
        //       type: ADD_IMAGEOBJECT,
        //       payload: { fileName: fileName }
        //     });
        //   })
        //   .catch(error => console.log(error));
        break;
    }
  }

  uploadImage(event) {
    // This function takes image file from file input, uses it to create a galleryImage,
    // and adds it to the projectState.
    let galleryImage = new GalleryImage();
    let file = event.srcElement.files[0];

    let date = new Date();
    let fileName = `${
      this.data.userState.username
    }-${date.getTime().toString()}`;
    galleryImage.id = this.data.projectState["images"].length;
    galleryImage.fileName = fileName;
    // Upload image to firestore and get the firestore image url
    this.data.initializeFirebase();
    let storageRef = firebase.storage().ref();
    storageRef
      .child(`images/${fileName}`)
      .put(file)
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
    console.log(this.data.projectState.selectedImage);
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
