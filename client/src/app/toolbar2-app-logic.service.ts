import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { DialogService } from "./dialog.service";
import { Store } from "@ngrx/store";
import { ProjectState } from "./state-management/state/projectState";
import {
  ADD_SLIDE,
  PREV_SLIDE,
  NEXT_SLIDE,
  DEL_SLIDE,
  SET_MODE
} from "./state-management/actions/projectActions";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class Toolbar2AppLogicService {
  projectState;

  constructor(
    private data: DataService,
    private dialog: DialogService,
    private store: Store<ProjectState>,
    private router: Router
  ) {}

  newTextObject() {
    this.store.dispatch({ type: SET_MODE, payload: { mode: "text" } });
  }

  newImageObject() {
    this.store.dispatch({ type: SET_MODE, payload: { mode: "image" } });
  }

  newSlide() {
    this.store.dispatch({ type: ADD_SLIDE });
  }

  prevSlide() {
    this.store.dispatch({ type: PREV_SLIDE });
  }

  nextSlide() {
    this.store.dispatch({ type: NEXT_SLIDE });
  }

  deleteSlide() {
    // Prompt user for confirmation before deleting current slide from project.
    if (this.data.projectState["slides"].length > 1) {
      let message = "Are you sure you want to delete this slide?";
      this.dialog.alert(message, "danger", () => {
        this.store.dispatch({ type: DEL_SLIDE });
      });
    }
  }

  preview() {
    this.router.navigate(["main/preview"]);
  }
}
