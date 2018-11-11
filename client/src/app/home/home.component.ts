import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from '../state-management/state/userState';
import { LOGIN } from '../state-management/actions/userActions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showLogin:boolean = true;
  showRegistration: boolean = false;

  constructor(private router:Router, private store:Store<UserState>) { }

  ngOnInit() {
  }

  showForm(form: 'login' | 'registration') {
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
