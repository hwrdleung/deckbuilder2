import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from '../state-management/state/userState';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*  UI LAYOUT VARIABLES  */
  showLogin: boolean = true;
  showRegistration: boolean = false;

  constructor(public router: Router, public store: Store<UserState>, public data:DataService) { }

  ngOnInit() {
  }

  showForm(form: 'login' | 'registration') {
    // This function serves as the controller for the displaying of login and registration forms
    switch (form) {
      case 'login':
        this.showLogin = true;
        this.showRegistration = false;
        break;
      case 'registration':
        this.showLogin = false;
        this.showRegistration = true;
        break;
    }
  }
}
