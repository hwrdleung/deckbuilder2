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
  DEL_IMAGE,
  SET_SELECTED_IMAGE_PREVIEW
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

  applyCssFilters = (url: string, imageStyle: ImageStyle, isPreview?: boolean) => {
    return new Promise((resolve, reject) => {
      var image = new Image();
      image.crossOrigin = "anonymous";
      image.src = url;

      image.onload = function() {

        // if(isPreview){
        //   let imageRatio = image.width / image.height;
        //   image.width = 600;
        //   image.height = image.width / imageRatio;
        // }

        var div = document.createElement("div");
        div.appendChild(image);
        // This function applies the style settings specifed in the selectedImageStyle
        // to the selectedImage via CamanJS, and returns a promise containing the edited image as base64 string
        Caman(image, function() {
          if(isPreview){
            let imageRatio = image.width / image.height;
            this.resize({
              width: 500,
              height: 500 / imageRatio
            })
          }

          if(imageStyle.greyscale) this.greyscale();
          if(imageStyle.invert) this.invert();
          this.brightness(imageStyle.brightness);
          this.contrast(imageStyle.contrast);
          this.exposure(imageStyle.exposure);
          this.gamma(imageStyle.gamma);
          this.hue(imageStyle.hue);
          this.saturation(imageStyle.saturation);
          this.sepia(imageStyle.sepia);
          this.vibrance(imageStyle.vibrance);

          this.render(function() {
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

        let selectedImageUrl;
        let selectedImageStyle;
        let token;
        let fileName;

        this.data.getProjectState()
          .then(data => {
            // Get data from projectState
            let projectState: any = data;
            selectedImageUrl = projectState.selectedImage.url;
            selectedImageStyle = projectState.selectedImageStyle;

            return this.data.getUserState();
          })
          .then(data => {
            // Get token and ceate fileName from userState data
            let userState: any = data;
            token = userState.token;
            fileName = `${
              userState.username
            }/${new Date().getTime().toString()}`;
            // Use CamanJS to create dataUrl with css filters applied
            return this.applyCssFilters(selectedImageUrl, selectedImageStyle);
          })
          .then(dataUrl => {
            // Send to backend for uploading to firebase
            return this.data.uploadDataUrlToFirebase(token, dataUrl, fileName);
          })
          .then(res => {
            // Backend returns the newly uploaded image's firebase URL.  
            // Send this data to the projectReducer to create a new imageObject for current slide
            let uploadData: any = res;
            let payload = {
              fileName: uploadData.body.fileName,
              url: uploadData.body.url
            };
            this.store.dispatch({
              type: ADD_IMAGEOBJECT,
              payload: payload
            });
          })
          .catch(error => console.log(error));
        break;
    }
  }

  getBase64 = file => {
    // This function takes an image file as a parameter and returns a promise
    // containing the image's base64 dataUrl
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  importImage(event) {
    // This function handles the onChange event for the file input in the imageSandbox.
    // It takes in an image file, converts it to base64, and sends it to the backend where it is
    // uploaded to firebase storage.  The server returns the image's firebase image URL, which is
    // then used to create a new GalleryImage.  
    let file = event.srcElement.files[0];
    let base64;

    // Convert file to base64
    this.getBase64(file)
      .then(data => {
        base64 = data;
        return this.data.getUserState();
      })
      .then(data => {
        // Get token from userState for backend verification
        // Use data in userState to generate a fileName for the image
        // This fileName will be used when saving to firebase storage.
        let userState: any = data;
        let fileName = `${
          userState.username
        }/${new Date().getTime().toString()}`;
        // Send to backend
        return this.data.uploadDataUrlToFirebase(userState.token, base64, fileName);
      })
      .then(res => {
        // After image is uploaded to firebase, server returns the image URL.
        // Use it to create a new GalleryImage, and update projectState with it.
        let uploadData: any = res;
        let galleryImage = new GalleryImage();
        galleryImage.url = uploadData.body.url;
        galleryImage.fileName = uploadData.body.fileName;

        let payload = {
          galleryImage: galleryImage
        };

        this.store.dispatch({ type: ADD_IMAGE, payload: payload });
      })
      .catch(error => console.log(error));
  }

  renderImagePreview(){
    // This function uses CamanJS to create a dataURL using the selectedImage and selectedImageStyle
    // It then updates the projectState with this dataURL
    this.data.getProjectState().then(data => {
      let projectState:any = data;
      return this.applyCssFilters(projectState.selectedImage.url, projectState.selectedImageStyle, true)
    }).then(dataURL => {
      let selectedImagePreview = dataURL;
      this.store.dispatch({
        type: SET_SELECTED_IMAGE_PREVIEW,
        payload: {selectedImagePreview: selectedImagePreview}
      })
    })
    .catch(error => console.log(error));
  }

  selectImage(galleryImage: GalleryImage) {
    // This function updates the store with the selected image specified in the parameters
    this.store.dispatch({
      type: SELECT_GALLERY_IMAGE,
      payload: { galleryImage: galleryImage }
    });

    this.renderImagePreview();
  }

  deleteImage(image: GalleryImage) {
    // This function prompts user for confirmation before deleting an image from the project gallery.
    let callback = () => {
      if(image.fileName) this.data.deleteFromFirebase([image.fileName]);
      this.store.dispatch({
        type: DEL_IMAGE,
        payload: { galleryImage: image }
      });

      this.dialog.toast('Deleted Image from gallery');
    };

    this.dialog.alert(
      "Are you sure you want to delete this image from your project?",
      "danger",
      callback
    );
  }
}
