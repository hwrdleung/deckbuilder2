import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';
import { Toolbar2AppLogicService } from '../toolbar2-app-logic.service';

@Component({
  selector: 'toolbar-secondary',
  templateUrl: './toolbar-secondary.component.html',
  styleUrls: ['./toolbar-secondary.component.css']
})
export class ToolbarSecondaryComponent implements OnInit {

  constructor(private data:DataService, private dialog:DialogService, private toolbar2: Toolbar2AppLogicService) { }

  ngOnInit() {
  }





}
