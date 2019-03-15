import { Component, OnInit, Input } from '@angular/core';
import { ShapeStyle } from '../classes/shapeStyle';
import { DataService } from '../data.service';
import { StylerAppLogicService } from '../styler-app-logic.service';
import { SandboxAppLogicService } from '../sandbox-app-logic.service';
import { Store } from '@ngrx/store';
import { ProjectState } from '../state-management/state/projectState';

@Component({
  selector: 'shape-style-card',
  templateUrl: './shape-style-card.component.html',
  styleUrls: ['./shape-style-card.component.css']
})
export class ShapeStyleCardComponent implements OnInit {

  @Input()
  shapeStyle: ShapeStyle;

  projectState: ProjectState;

  constructor(public data: DataService, public styler: StylerAppLogicService, public sandbox: SandboxAppLogicService, public store:Store<any>) {
  }

  ngOnInit() {
    this.store.select('projectReducer').subscribe(projectState => {
      this.projectState = projectState;
    });
  }

}
