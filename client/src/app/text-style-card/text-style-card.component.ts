import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { TextStyle } from '../classes/textStyle';

@Component({
  selector: 'text-style-card',
  templateUrl: './text-style-card.component.html',
  styleUrls: ['./text-style-card.component.css']
})
export class TextStyleCardComponent implements OnInit {

  @Input()
    textStyle: TextStyle;

  constructor(private data: DataService) { 
  }

  ngOnInit() {
  }

}
