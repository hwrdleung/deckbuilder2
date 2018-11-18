import { Component, OnInit, Input } from '@angular/core';
import { ImageStyle } from '../classes/imageStyle';
import { DataService } from '../data.service';
import { StylerAppLogicService } from '../styler-app-logic.service';

@Component({
  selector: 'image-style-card',
  templateUrl: './image-style-card.component.html',
  styleUrls: ['./image-style-card.component.css']
})
export class ImageStyleCardComponent implements OnInit {

  @Input()
  imageStyle: ImageStyle;

  constructor(private data: DataService, private styler: StylerAppLogicService) {

  }

  ngOnInit() {
  }
}
