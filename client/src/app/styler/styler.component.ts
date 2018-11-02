import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TextStyle } from '../classes/textStyle';
import { StylerAppLogicService } from '../styler-app-logic.service';

@Component({
  selector: 'styler',
  templateUrl: './styler.component.html',
  styleUrls: ['./styler.component.css']
})
export class StylerComponent implements OnInit {

  textStyles: Array<TextStyle> = this.data.textStyles;

  constructor(private data: DataService, private styler:StylerAppLogicService) { }

  ngOnInit() {
  }

  getCpPosition(){
    return "right";
  }

}
