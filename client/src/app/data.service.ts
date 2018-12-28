import { Injectable } from "@angular/core";
import { DialogService } from "./dialog.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as html2canvas from "html2canvas";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { LOGIN, LOGOUT } from "./state-management/actions/userActions";
import { Slide } from "./classes/slide";
import { TextObject } from "./classes/textObject";
import { ImageObject } from "./classes/imageObject";
import { TextStyle } from "./classes/textStyle";
import { GalleryImage } from "./classes/galleryImage";
import { ImageStyle } from "./classes/imageStyle";
import * as firebase from "firebase";
declare var Caman: any;

/*
  HOME
    -Think of a good name for the app

  SANDBOX
    -Find a solution for image storage
    -Get camanJS to work
*/

@Injectable({
  providedIn: "root"
})
export class DataService {
  /* SERVER VARIABLES */
  apiEndpoint: string = 'https://deckbuilder2.herokuapp.com';
  // apiEndpoint: string = "http://localhost:3000";
  serverMsg: string = "";

  /* STATE VARIABLES */
  userState: any;
  projectState: any;

  /*  UI VARIABLES */
  // Had to put this here so that dataService could hide the forms after API calls
  showChangePasswordForm: boolean = false;
  showDeleteAccountForm: boolean = false;
  isSlideRenderLoading: boolean = false;

  constructor(
    private dialog: DialogService,
    private http: HttpClient,
    private router: Router,
    private store: Store<any>
  ) {}

  displayServerMessage(message: string) {
    // This function sets serverMsg = message and clears it after 5 seconds.
    this.serverMsg = message;
    setTimeout(() => {
      this.serverMsg = null;
    }, 5000);
  }

  initializeFirebase = () => {
    if (!firebase.apps.length) {
      var config = {
        apiKey: "AIzaSyBz9UkDgc3Qfw-U31dJU43UoaymI5CtH44",
        authDomain: "deckbuilder-1531369409076.firebaseapp.com",
        projectId: "deckbuilder-1531369409076",
        storageBucket: "gs://deckbuilder-1531369409076.appspot.com"
      };

      firebase.initializeApp(config);
      firebase
        .auth()
        .signInAnonymously()
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  uploadDataUrlToFirebase = (token, dataUrl, fileName) => {
    // This function makes a call to the backend to upload dataUrl to firebase
    // and returns a promise containing the server response.
    return new Promise((resolve, reject) => {
      let body = {
        token: token,
        dataUrl: dataUrl,
        fileName: fileName
      };
      this.http
        .post(this.apiEndpoint + "/upload-image", body)
        .subscribe(res => resolve(res));
    });
  };

  deleteFromFirebase = (fileNames: string[]) => {
      this.getUserState().then(data => {
        let userState:any = data;
        let body = {
          fileNames: fileNames,
          token: userState.token
        }

        this.http.post(this.apiEndpoint + '/delete-image', body).subscribe(res => {
          if(res['success'] === false) console.log(res);
        })
      })
      .catch(error => console.log(error))
  };

  // User registration
  register(formData) {
    // This function handles ngSubmit for the reigstration form
    // Capitalize the user's first and last names
    let capitalize = function(str: string) {
      let strArr = str.split(" ");
      for (let i = 0; i < strArr.length; i++) {
        strArr[i] =
          strArr[i][0].toUpperCase() + strArr[i].substring(1).toLowerCase();
      }
      return strArr.join(" ");
    };

    formData.first = capitalize(formData.first);
    formData.last = capitalize(formData.last);

    // Make API call to the back-end for user registration
    this.http
      .post(this.apiEndpoint + "/new-account", formData)
      .subscribe(res => {
        if (res["success"]) {
          this.displayServerMessage(res["message"]);
          let token = res["body"];
          sessionStorage.setItem("sessionData", token);

          let loginData = {
            username: formData.username,
            password: formData.password
          };

          this.login(loginData);
          let welcomeMessage = `Registration was successful.  Welcome!  To get started, click on "Create a new project!"`;
          this.dialog.alert(welcomeMessage, "success");
        } else if (!res["success"]) {
          // Display error message to form
          this.displayServerMessage(res["message"]);
        }
      });
  }

  // User login
  login(formData) {
    // This function handles ngSubmit for the login form
    this.http.post(this.apiEndpoint + "/auth", formData).subscribe(res => {
      if (res["success"] === true) {
        this.displayServerMessage(res["message"]);

        let payload = {
          isLoggedIn: true,
          first: res["body"]["first"],
          last: res["body"]["last"],
          email: res["body"]["email"],
          username: res["body"]["username"],
          token: res["body"]["token"]
        };
        // Store session data to session storage
        // Update the store's userState
        // Route to dashboard
        sessionStorage.setItem("sessionData", JSON.stringify(payload));
        this.store.dispatch({ type: LOGIN, payload: payload });
        this.router.navigate(["dashboard"]);

        // Subscribe to userState and set it to variable in dataService
        // so that it can be used in other componenets and services
        this.store.select("userReducer").subscribe(userState => {
          this.userState = userState;
        });
      } else if (res["success"] === false) {
        // Display error message to form
        this.displayServerMessage(res["message"]);
      }
    });
  }

  logout() {
    // Clear session storage, clear the store's userState, and route to '/'
    sessionStorage.removeItem("sessionData");
    this.store.dispatch({ type: LOGOUT });
    this.router.navigate(["/"]);
  }

  deleteAccount(formData) {
    // This function handles ngSubmit for the 'delete account form' in the dashboard's 'settings' view.
    // Confirmation is handled by form validations in dashboard.ts, requiring the user's password.
    // Make API call to delete user from database and display server message on failure, logout on success
    let headers = new HttpHeaders();
    headers = headers.append("username", this.userState["username"]);
    headers = headers.append("password", formData.password);

    this.http
      .delete(this.apiEndpoint + "/delete-account", { headers: headers })
      .subscribe(res => {
        if (res["success"] === false) this.displayServerMessage(res["message"]);
        if (res["success"] === true) {
          this.showDeleteAccountForm = false;
          this.logout();
        }
      });
  }

  changePassword(formData) {
    // This function handles ngSubmit of the 'change password form' in the dashboard's 'settings' view.
    // Confirmation is handled by form validaions in dashboard.ts, requiring the user to enter their current password.
    // Make API call to back-end to change the user's password.

    let payload = {
      username: this.userState["username"],
      password: formData.oldPassword,
      newPassword: formData.newPassword
    };

    this.http
      .post(this.apiEndpoint + "/change-password", payload)
      .subscribe(res => {
        if (res["success"] === false) this.displayServerMessage(res["message"]);
        if (res["success"] === true) {
          this.showChangePasswordForm = false;
          this.dialog.alert("Your new password has been saved.", "success");
        }
      });
  }

  getProjectState = () => {
    // This function subscribes to the store's projectState and returns it in a promise.
    return new Promise((resolve, reject) => {
      this.store.select("projectReducer").subscribe(projectState => {
        resolve(projectState);
      });
    });
  };

  getUserState = () => {
    // This function subscribes to the store's userState and returns it in a promise.
    return new Promise((resolve, reject) => {
      this.store.select("userReducer").subscribe(userState => {
        resolve(userState);
      });
    });
  };

  reviveProject(projectData) {
    // This function takes in a projectState in JSON format, and "revives" its data.
    // The purpose of the "revive" functions is to restore prototype functions to projectData.
    this.reviveGalleryImages(projectData);
    this.reviveTextStyles(projectData);
    this.reviveImageStyles(projectData);
    this.reviveSlides(projectData);
    this.reviveSlideObjectStyles(projectData);
    return projectData;
  }

  reviveSlideObjectStyles(projectData) {
    // Helper function for reviveProject()
    projectData.slides.forEach(slide => {
      slide.slideObjects.forEach(slideObject => {
        switch (slideObject.type) {
          case "TextObject":
            for (let i = 0; i < projectData.textStyles.length; i++) {
              if (projectData.textStyles[i].id === slideObject.style.id) {
                slideObject.style = projectData.textStyles[i];
                break;
              }
            }
            break;

          case "ImageObject":
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
    // Helper function for reviveProject()
    let slides = [];
    projectData.slides.forEach(slide => {
      let newSlide = new Slide();
      newSlide.revive(slide);

      for (let i = 0; i < slide.slideObjects.length; i++) {
        let type: string = "";
        if (slide.slideObjects[i].hasOwnProperty("textValue"))
          type = "TextObject";
        if (slide.slideObjects[i].hasOwnProperty("imagePath"))
          type = "ImageObject";

        switch (type) {
          case "TextObject":
            let textObject = new TextObject();
            textObject.revive(slide.slideObjects[i]);
            newSlide.slideObjects[i] = textObject;
            break;
          case "ImageObject":
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
    // Helper function for reviveProject()
    // Revive selectedTextStyle
    // Revive text styles
    let textStyles = [];
    for (let i = 0; i < projectData.textStyles.length; i++) {
      let thisTextStyle = projectData.textStyles[i];
      let textStyle = new TextStyle();
      textStyle.revive(thisTextStyle);
      textStyles.push(textStyle);
    }
    projectData.textStyles = textStyles;
    projectData.selectedTextStyle = projectData.textStyles[0];
  }

  reviveGalleryImages(projectData) {
    // Helper function for reviveProject()
    // Revive selectedImage
    let selectedImage = new GalleryImage();
    selectedImage.revive(projectData.selectedImage);
    projectData.selectedImage = selectedImage;

    // Revive images
    let images = [];

    for (let i = 0; i < projectData.images.length; i++) {
      let thisImage = projectData.images[i];
      let galleryImage = new GalleryImage();
      galleryImage.revive(thisImage);
      images.push(galleryImage);
    }
    projectData.images = images;
    projectData.selectedImage = null;
  }

  reviveImageStyles(projectData) {
    // Helper function for reviveProject()
    // Revive selectedImageStyle
    let selectedImageStyle = new ImageStyle();
    selectedImageStyle.revive(projectData.selectedImageStyle);
    projectData.selectedImageStyle = selectedImageStyle;

    // Revive imageStyles
    let imageStyles = [];
    for (let i = 0; i < projectData.imageStyles.length; i++) {
      let thisImageStyle = projectData.imageStyles[i];
      let imageStyle = new ImageStyle();
      imageStyle.revive(thisImageStyle);
      imageStyles.push(imageStyle);
    }
    projectData.imageStyles = imageStyles;
    projectData.selectedImageStyle = projectData.imageStyles[0];
  }

  // Storage for canvasPrep()
  SRA_ORIGINAL_OVERFLOW = "";
  SR_ORIGINAL_OVERFLOW = "";
  SR_ORIGINAL_TRANSFORM = "";

  canvasPrep(task: "start" | "complete") {
    // This function makes changes to DOM style values necessary for HTML2CANVAS to work properly.
    // This funcion is shared between dataService and toolbarAppLogicService
    let slideRender = document.getElementById("slide-render");
    let slideRenderArea = document.getElementById("slide-render-area");

    switch (task) {
      case "start":
        // Save original style values before changing them
        this.SRA_ORIGINAL_OVERFLOW = slideRenderArea.style.overflow;
        this.SR_ORIGINAL_OVERFLOW = slideRender.style.overflow;
        this.SR_ORIGINAL_TRANSFORM = slideRender.style.transform;

        // Set required css style values for HTML2CANVAS to work properly
        slideRender.style.transform = "scale(1)";
        slideRender.style.overflow = "visible";
        slideRenderArea.style.overflow = "visible";
        break;
      case "complete":
        slideRender.style.transform = this.SR_ORIGINAL_TRANSFORM;
        slideRender.style.overflow = this.SR_ORIGINAL_OVERFLOW;
        slideRenderArea.style.overflow = this.SRA_ORIGINAL_OVERFLOW;
        break;
    }
  }

  getThumbnail() {
    // This function returns a promise containing a small snapshot of the slide render
    // at the time this function is called.  (when saving project)
    return new Promise((resolve, reject) => {
      // Show loader screen
      let slideRender = document.getElementById("slide-render");
      this.canvasPrep("start");
      this.isSlideRenderLoading = true;

      // Get project state for doc height and width
      let projectState;
      const getProjectState = this.store
        .select("projectReducer")
        .subscribe(data => {
          projectState = data;
        });

      html2canvas(slideRender, {
        height: projectState.documentSize.height,
        width: projectState.documentSize.width,
        scale: 200 / projectState.documentSize.height,
        allowTaint: false,
        useCORS: true
      })
        .then(canvas => {
          let imgData = canvas.toDataURL("image/png");
          this.canvasPrep("complete");
          getProjectState.unsubscribe();
          this.isSlideRenderLoading = false;
          resolve(imgData);
        })
        .catch(error => console.log(error));
    });
  }

  saveProject() {
    return new Promise((resolve, reject) => {
      /*
          1.  Detect user session.  This feature is only available to registered users.
          2.  Get thumbnail
          3.  Get project state, and update 'lastSaved' and 'thumbnail'.  Convert to JSON.
          4.  Get user state for the token.  Create payload with token and project state.
          5.  Make API call to save this project's changes to the database.
          6.  Display dialog message
      */
      let sessionData = sessionStorage.getItem("sessionData");

      if (!sessionData) {
        reject("User is not signed in.");
      } else if (sessionData) {
        let projectState:any;
        let userState:any;

        this.getProjectState()
          .then(data => {
            projectState = data;
            // Update projectState values
            projectState.lastSaved = new Date();
            return this.getUserState();
          })
          // Get userState
          .then(data => {
            userState = data;
            return this.getThumbnail()
          })
          // Get create thumbnail of currentSlide and upload to firebase
          .then(data => {
            let fileName = `${userState.username}/${projectState.name}-thumbnail`;
            return this.uploadDataUrlToFirebase(userState.token, data, fileName);
          })
          .then(res => {
            // Set project thumbnail
            let uploadData:any = res;
            projectState.thumbnailUrl = uploadData.body.url;
            projectState.thumbnailFileName = uploadData.body.fileName;
            // Clear selectedImagePreview -- it does not need to be saved in the database
            // and it causes issues with file size being too large when sending payload to backend
            projectState.selectedImagePreview = '';
            // Create payload for http POST request
            let payload = {
              token: userState.token,
              project: JSON.stringify(projectState)
            };
            // Send projectState to backend to be saved to DB
            this.http
              .post(this.apiEndpoint + "/save-project", payload)
              .subscribe(res => {
                resolve(res);
              });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }
}
