import { Component, OnInit, Input } from '@angular/core';
import { ImageStyle } from '../classes/imageStyle';
import { DataService } from '../data.service';
import { StylerController } from '../styler-controller.service';
import { SandboxController } from '../sandbox-controller.service';
import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';

@Component({
  selector: 'image-style-card',
  templateUrl: './image-style-card.component.html',
  styleUrls: ['./image-style-card.component.css']
})
export class ImageStyleCardComponent implements OnInit {

  projectState: ProjectState;

  @Input()
  imageStyle: ImageStyle;

  constructor(public data: DataService, public styler: StylerController, public sandbox: SandboxController, public store:Store<any>) {

  }

  ngOnInit() {
    this.store.select('projectReducer').subscribe(projectState => {
      this.projectState = projectState;
    });
  }

  refreshImageRender(imageStyle:ImageStyle){
    if(imageStyle === this.projectState.selectedImageStyle){
      this.sandbox.renderImagePreview();
    }
  }
}
