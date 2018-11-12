import { Injectable } from "@angular/core";
import { DialogService } from "./dialog.service";
import { HttpClient } from "@angular/common/http";

import { Router } from '@angular/router';

import { Store } from "@ngrx/store";
import { LOGIN, LOGOUT } from './state-management/actions/userActions';
import { Slide } from "./classes/slide";
import { TextObject } from "./classes/textObject";
import { ImageObject } from "./classes/imageObject";
import { TextStyle } from "./classes/textStyle";
import { GalleryImage } from "./classes/galleryImage";
import { ImageStyle } from "./classes/imageStyle";

/*
  TODO:

  HOME
    -Fix displaying of server error messages on login compoent
    -Think of a good title for the app
    -Come up with description text

  DASHBOARD
    -Implement functionality for editing user data: email address and password
    -Fix dialog alert system for user dashboard when deleting projects
    -Add more options for document size when creating projects
    -Add icons/images for document size options in the project creator popup
    -Add loader icon when user opens a project
    -Fix refreshing of dashboard data when user deletes a project.  Why is it so slow?

  TOOLBARS
    -Set conditional buttons on main app when using as guest to prompt user registration for features: save, export to pdf, save as png
    -Fix PREVIEW 
    -Fix SAVE AS PNG
    -Decide on mobile functionality - preview only?
    -Add toolbar button for returning to user dashboard
    -Fix padding on save button

  STYLER
    -Add box shadows for imageStyles
    -Add click event listener on document when in edit title mode
    -Add confirm dialog for deleting styles
    -Fix functionality: deleting in-use styles reverts slideObjects using that style to default style
    -Fix hover background color of 'show extra options' link

  SANDBOX
    -Find a solution for image storage
    -Get camanJS to work
    -Add zoom capability
    -Fix issue of previous styling carrying over in browser when changing selected styles
    -Change pixabay search to go through backend to avoid cors issue

  SLIDE EDITOR
    -Add toggle button on layer heirarchy for maintaing aspect ratio
    -Add popup textbox for editiong textObject textValue
    -Fix issues with manual resizing of imageObjects in layer heirarchy
    -Add button for changing style of slideObjects

  DATA
    -Impelement functionality for creating project thumbnails when saving projects
    -Impelement auto saving for projects
*/


@Injectable({
  providedIn: "root"
})

export class DataService {

  apiEndpoint: string = 'http://localhost:3000';
  serverMsg: string = '';
  userState: object;

  constructor(private dialog: DialogService, private http: HttpClient, private router: Router, private store: Store<any>) { }

  // User login
  login(formData) {
    this.http.post(this.apiEndpoint + '/auth', formData).subscribe((res) => {
      if (res['success']) {
        this.serverMsg = res['message'];

        let payload = {
          isLoggedIn: true,
          first: res['body']['first'],
          last: res['body']['last'],
          email: res['body']['email'],
          username: res['body']['username'],
          token: res['body']['token'],
        }
        sessionStorage.setItem('sessionData', JSON.stringify(payload));
        this.store.dispatch({ type: LOGIN, payload: payload });
        this.router.navigate(['dashboard']);

      } else if (!res['success']) {
        // Display error message to form
        this.serverMsg = res['message'];
      }
    })
  }

  logout() {
    sessionStorage.removeItem('sessionData');
    this.store.dispatch({ type: LOGOUT });
    this.router.navigate(['/']);
  }

  getProjectState = () => {
    return new Promise((resolve, reject) => {
      this.store.select('projectReducer').subscribe(projectState => {
        if (projectState) resolve(projectState);
        reject();
      });
    });
  }

  getUserState = () => {
    return new Promise((resolve, reject) => {
      this.store.select('userReducer').subscribe(userState => {
        if (userState) resolve(userState);
        reject();
      });
    });
  }

  reviveProject(projectData) {
    this.reviveGalleryImages(projectData)
    this.reviveTextStyles(projectData)
    this.reviveImageStyles(projectData)
    this.reviveSlides(projectData)
    this.reviveSlideObjectStyles(projectData);
    return projectData;
  }

  reviveSlideObjectStyles(projectData) {
    projectData.slides.forEach(slide => {
      slide.slideObjects.forEach(slideObject => {
        let type = slideObject.constructor.name;
        console.log(type);
        switch (type) {
          case 'TextObject':
            for (let i = 0; i < projectData.textStyles.length; i++) {
              if (projectData.textStyles[i].id === slideObject.style.id) {
                slideObject.style = projectData.textStyles[i];
                break;
              }
            }
            break;
          case 'ImageObject':
            for (let i = 0; i < projectData.imageStyles.length; i++) {
              if (projectData.imageStyles[i].id === slideObject.style.id) {
                slideObject.style = projectData.imageStyles[i];
                break;
              }
            }
            break;
        }
      });
    });
  }

  reviveSlides(projectData) {
    let slides = [];

    projectData.slides.forEach(slide => {
      let newSlide = new Slide();
      newSlide.revive(slide);

      for (let i = 0; i < slide.slideObjects.length; i++) {
        let type: string = '';
        if (slide.slideObjects[i].hasOwnProperty('textValue')) type = 'TextObject';
        if (slide.slideObjects[i].hasOwnProperty('imagePath')) type = 'ImageObject';

        switch (type) {
          case 'TextObject':
            let textObject = new TextObject();
            textObject.revive(slide.slideObjects[i]);
            newSlide.slideObjects[i] = textObject;
            break;
          case 'ImageObject':
            let imageObject = new ImageObject();
            imageObject.revive(slide.slideObjects[i]);
            newSlide.slideObjects[i] = imageObject;
            break;
        }
      }
      slides.push(newSlide);
    });
    projectData.slides = slides;
  }

  reviveTextStyles(projectData) {
    // Revive selectedTextStyle
    // Revive text styles
    let textStyles = [];

    for (let i = 0; i < projectData.textStyles.length; i++) {
      let thisTextStyle = projectData.textStyles[i];
      let textStyle = new TextStyle;
      textStyle.revive(thisTextStyle);
      textStyles.push(textStyle);
    }
    projectData.textStyles = textStyles;
    projectData.selectedTextStyle = projectData.textStyles[0];
  }

  reviveGalleryImages(projectData) {

    // Revive selectedImage
    let selectedImage = new GalleryImage;
    selectedImage.revive(projectData.selectedImage);
    projectData.selectedImage = selectedImage;

    // Revive images
    let images = [];

    for (let i = 0; i < projectData.images.length; i++) {
      let thisImage = projectData.images[i];
      let galleryImage = new GalleryImage;
      galleryImage.revive(thisImage);
      images.push(galleryImage);
    }
    projectData.images = images;
    projectData.selectedImage = null;
  }

  reviveImageStyles(projectData) {
    // Revive selectedImageStyle
    let selectedImageStyle = new ImageStyle;
    selectedImageStyle.revive(projectData.selectedImageStyle);
    projectData.selectedImageStyle = selectedImageStyle;

    // Revive imageStyles
    let imageStyles = [];

    for (let i = 0; i < projectData.imageStyles.length; i++) {
      let thisImageStyle = projectData.imageStyles[i];
      let imageStyle = new ImageStyle;
      imageStyle.revive(thisImageStyle);
      imageStyles.push(imageStyle);
    }
    projectData.imageStyles = imageStyles;
    projectData.selectedImageStyle = projectData.imageStyles[0];
  }

  saveProject() {
    let projectState;
    let userState;

    return this.getProjectState()
      .then(data => {
        projectState = JSON.stringify(data);
        return this.getUserState();
      })

      .then(data => {
        userState = data;
        return userState;
      })

      .then((userState) => {
        let payload = {
          token: userState.token,
          project: projectState
        }
        return this.http.post(this.apiEndpoint + '/save-project', payload).subscribe();
      })
      .catch(error => { console.log(error) })
  }

}
