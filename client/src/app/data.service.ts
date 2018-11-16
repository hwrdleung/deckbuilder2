import { Injectable } from "@angular/core";
import { DialogService } from "./dialog.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
    -Think of a good name for the app
    -Come up with description text

  DASHBOARD
    -Fix refreshing of dashboard data when user deletes a project.  Why is it so slow?

  TOOLBARS
    -Decide on mobile functionality - preview only?

  SANDBOX
    -Find a solution for image storage
    -Get camanJS to work

  SLIDE EDITOR
    -Add button for changing style of slideObjects

  DATA
    -Impelement functionality for creating project thumbnails when saving projects
*/


@Injectable({
  providedIn: "root"
})

export class DataService {

  apiEndpoint: string = 'https://deckbuilder2.herokuapp.com/user';
  // apiEndpoint: string = 'http://localhost:3000/user';
  serverMsg: string = '';
  userState: object;

  showChangePasswordForm: boolean = false;
  showDeleteAccountForm: boolean = false;

  constructor(private dialog: DialogService, private http: HttpClient, private router: Router, private store: Store<any>) { }

  displayServerMessage(message: string) {
    this.serverMsg = message;
    setTimeout(() => {
      this.serverMsg = null;
    }, 5000)
  }

  // User registration
  register(formData) {

    // Parse formData
    let capitalize = function (str: string) {
      let strArr = str.split(' ');
      for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase();
      }
      return strArr.join(' ');
    }

    formData.first = capitalize(formData.first);
    formData.last = capitalize(formData.last);

    // Make api call
    this.http.post(this.apiEndpoint + '/new-account', formData).subscribe(res => {

      if (res['success']) {
        this.displayServerMessage(res['message']);
        let token = res['body'];
        sessionStorage.setItem('sessionData', token);

        let loginData = {
          username: formData.username,
          password: formData.password
        }

        this.login(loginData);

        let welcomeMessage = `Registration was successful.  Welcome!  To get started, click on "Create a new project!"`;
        this.dialog.alert(welcomeMessage, 'success');

      } else if (!res['success']) {
        // Display error message to form
        this.displayServerMessage(res['message']);
      }
    })
  }


  // User login
  login(formData) {
    this.http.post(this.apiEndpoint + '/auth', formData).subscribe((res) => {
      if (res['success'] === true) {
        this.displayServerMessage(res['message']);

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
      } else if (res['success'] === false) {
        // Display error message to form
        this.displayServerMessage(res['message']);
      }
    })
  }

  logout() {
    sessionStorage.removeItem('sessionData');
    this.store.dispatch({ type: LOGOUT });
    this.router.navigate(['/']);
  }

  deleteAccount(formData) {
    this.getUserState().then(userState => {

      let headers = new HttpHeaders;
      headers = headers.append('username', userState['username']);
      headers = headers.append('password', formData.password);

      this.http.delete(this.apiEndpoint + '/delete-account', { headers: headers }).subscribe(res => {
        if (res['success'] === false) this.displayServerMessage(res['message']);
        if (res['success'] === true) {
          this.showDeleteAccountForm = false;
          this.logout();
        }
      })
    })
  }

  changePassword(formData) {
    this.getUserState().then(userState => {

      let payload = {
        username: userState['username'],
        password: formData.oldPassword,
        newPassword: formData.newPassword
      }

      this.http.post(this.apiEndpoint + '/change-password', payload).subscribe(res => {
        if (res['success'] === false) this.displayServerMessage(res['message']);
        if (res['success'] === true) {
          this.showChangePasswordForm = false;
          this.dialog.alert('Your new password has been saved.', 'success')
        }
      });
    })

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
    // create thumbnail here

    return this.getProjectState()
      .then(data => {
        projectState = data;
        projectState.lastSaved = new Date();
        projectState = JSON.stringify(projectState);
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
        this.http.post(this.apiEndpoint + '/save-project', payload).subscribe();
      })
      .catch(error => { console.log(error) })
  }

}
