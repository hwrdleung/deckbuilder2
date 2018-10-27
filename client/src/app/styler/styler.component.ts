import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TextStyle } from '../classes/textStyle';

@Component({
  selector: 'styler',
  templateUrl: './styler.component.html',
  styleUrls: ['./styler.component.css']
})
export class StylerComponent implements OnInit {

  textStyles: Array<TextStyle> = this.data.textStyles;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getCpPosition(){
    return "right";
  }

}
