import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'styler',
  templateUrl: './styler.component.html',
  styleUrls: ['./styler.component.css']
})
export class StylerComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  getCpPosition(){
    // 
    return "right";
  }

}
