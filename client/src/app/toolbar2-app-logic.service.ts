import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { Store } from '@ngrx/store';
import { ProjectState } from './state-management/state/projectState';
import { ADD_SLIDE, PREV_SLIDE, NEXT_SLIDE, DEL_SLIDE, SET_MODE } from './state-management/actions/projectActions';


@Injectable({
  providedIn: 'root'
})
export class Toolbar2AppLogicService {

  constructor(private data: DataService, private dialog: DialogService, private store: Store<ProjectState>) { }

  newTextObject() {
    this.store.dispatch({ type: SET_MODE, payload: { mode: 'text' } });
  }

  newImageObject() {
    this.store.dispatch({ type: SET_MODE, payload: { mode: 'image' } });
  }

  newSlide() {
    this.store.dispatch({ type: ADD_SLIDE });
  }

  prevSlide() {
    this.store.dispatch({ type: PREV_SLIDE });
  }

  nextSlide() {
    this.store.dispatch({ type: NEXT_SLIDE });
  }

  deleteSlide() {
    this.data.getProjectState().then(projectState => {
      if (projectState['slides'].length > 1) {
        let message = 'Are you sure you want to delete this slide?';
        this.dialog.alert(message, 'danger', () => {
          this.store.dispatch({ type: DEL_SLIDE });
        });
      }
    })
  }

  // preview() {
  //   let context = this;

  //   // The 'click' eventListener causes mouseControl to increment currentSlideIndex.
  //   // Initializing to -1 allows the slideshow to start at currentSlideIndex = 0
  //   this.data.currentSlideIndex = -1;

  //   // Create HTML elements to be displayed in fullscreen mode:
  //   // Slideshow contents
  //   let slideRender = document.getElementById('slide-render') as HTMLElement;
  //   let copy;

  //   // Foreground fullscreen transparent overlay to disable draggable contents in fullscreen mode
  //   let overlay = document.createElement('div');
  //   overlay.style.cssText = `
  //     background: transparent;
  //     width: 100%;
  //     height: 100%;
  //     position: absolute;
  //     top: 0 ;
  //     left: 0;
  //     z-index: 100;
  //   `;

  //   // Fullscreen container 
  //   // Putting fullscreen contents in a container allows control over the sizing 
  //   // and positioning of elements displayed in fullscreen mode
  //   let fullscreenContainer = document.createElement('div');
  //   fullscreenContainer.style.cssText = `
  //     background" #000;
  //   `;

  //   // Add elements to DOM
  //   document.body.appendChild(fullscreenContainer);

  //   refreshPreview();
  //   launchIntoFullscreen(fullscreenContainer);

  //   // Enable slideshow navgation
  //   document.addEventListener('keyup', keyboardControl);
  //   document.addEventListener('click', mouseControl);

  //   // Exit preview mode - Remove fullscreen elements and event listeners from DOM
  //   document.addEventListener("fullscreenchange", exitPreviewMode);
  //   document.addEventListener("mozfullscreenchange", exitPreviewMode);
  //   document.addEventListener("webkitfullscreenchange", exitPreviewMode);
  //   document.addEventListener("msfullscreenchange", exitPreviewMode);

  //   function exitPreviewMode(event) {
  //     if (document.fullscreenElement || document.webkitFullscreenElement === null) {
  //       document.body.removeChild(fullscreenContainer);

  //       // Disable keyboard and mouse navigation
  //       document.removeEventListener('keyup', keyboardControl);
  //       document.removeEventListener('click', mouseControl);
  //     }
  //   }

  //   function launchIntoFullscreen(element) {
  //     if (element.requestFullscreen) {
  //       element.requestFullscreen();
  //     } else if (element.mozRequestFullScreen) {
  //       element.mozRequestFullScreen();
  //     } else if (element.webkitRequestFullscreen) {
  //       element.webkitRequestFullscreen();
  //     } else if (element.msRequestFullscreen) {
  //       element.msRequestFullscreen();
  //     }
  //     element.requestPointerLock();
  //   }

  //   function mouseControl(event) {
  //     switch (event.button) {
  //       case 2: // Right click
  //         context.previousSlide();
  //         refreshPreview();
  //         break;
  //       case 0: // Left click
  //         context.nextSlide();
  //         refreshPreview();
  //         break;
  //     }
  //   }

  //   function keyboardControl(event) {
  //     switch (event.key) {
  //       case 'ArrowLeft':
  //         context.previousSlide();
  //         refreshPreview();
  //         break;
  //       case 'ArrowRight':
  //         context.nextSlide();
  //         refreshPreview();
  //         break;
  //     }
  //   }

  //   function refreshPreview() {
  //     setTimeout(() => {
  //       copy = slideRender.cloneNode(true) as HTMLElement;
  //       copy.appendChild(overlay);
  //       fullscreenContainer.appendChild(copy);

  //       // Scale elements to full screen size while maintaining aspect ratio
  //       let scaleX = screen.width / copy.clientWidth;
  //       let scaleY = screen.height / copy.clientHeight;
  //       let scaleFactor = Math.min(scaleX, scaleY).toFixed(1);
  //       copy.style.transform = "scale(" + scaleFactor.toString() + ", " + scaleFactor.toString() + ")";
  //       copy.style.position = "absolute";
  //       copy.style.transformOrigin = "left top";
  //       copy.style.top = "0";
  //       copy.style.left = "0";
  //       copy.style.overflow = "hidden";
  //     }, 300);
  //   }
  // }


}
