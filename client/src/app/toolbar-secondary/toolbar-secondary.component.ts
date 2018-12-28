import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { DialogService } from "../dialog.service";
import { Toolbar2AppLogicService } from "../toolbar2-app-logic.service";
import { Store } from "@ngrx/store";
import { ProjectState } from "../state-management/state/projectState";
import { Slide } from "../classes/slide";

@Component({
  selector: "toolbar-secondary",
  templateUrl: "./toolbar-secondary.component.html",
  styleUrls: ["./toolbar-secondary.component.css"]
})
export class ToolbarSecondaryComponent implements OnInit {
  /*  UI LAYOUT VARIABLES */
  slides: Slide[];
  currentSlideIndex;

  /*  NGRX STORE SUBSCRIPTION  */
  projectStateSubscription;

  constructor(
    public data: DataService,
    public dialog: DialogService,
    public toolbar2: Toolbar2AppLogicService,
    public store: Store<ProjectState>
  ) {}

  ngOnInit() {
    this.projectStateSubscription = this.store
      .select("projectReducer")
      .subscribe(projectState => {
        this.slides = projectState.slides;
        this.currentSlideIndex = projectState.currentSlideIndex;
      });
  }

  ngOnDestroy() {
    this.projectStateSubscription.unsubscribe();
  }
}
