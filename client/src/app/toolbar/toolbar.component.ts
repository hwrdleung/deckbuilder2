import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToolbarAppLogicService } from '../toolbar-app-logic.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private data: DataService, private toolbar:ToolbarAppLogicService) { }

  ngOnInit() {
    console.log('current project:', this.data.currentProject);
  }

  isSelected(style) {

    let type = style.constructor.name;
    let response: boolean;

    switch (type) {
      case 'ImageStyle':
        if (style.id === this.data.selectedImageStyleId) {
          response = true;
        } else {
          response = false;
        }
        break;
      case 'TextStyle':
        if (style.id === this.data.selectedTextStyleId) {
          response = true;
        } else {
          response = false;
        }
        break;
    }

    return response;
  }
}
