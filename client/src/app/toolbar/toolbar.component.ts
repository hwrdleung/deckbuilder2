import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {

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
