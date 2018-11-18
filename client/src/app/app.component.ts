import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from './state-management/state/userState';
import { LOGIN } from './state-management/actions/userActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private store: Store<UserState>) {

  }

  ngOnInit() {
    // Detect browser session
    if (sessionStorage.getItem('sessionData')) {
      let sessionData = sessionStorage.getItem('sessionData');
      sessionData = JSON.parse(sessionData);
      this.store.dispatch({ type: LOGIN, payload: sessionData });
      this.router.navigate(['dashboard']);
    }
  }
}

