import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showLogin: Boolean = true;
  showRegistration: Boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    // Check for user session
    // if(sessionStorage.getItem('currentUser')){
    //   this.router.navigate(['dashboard']);
    // }
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
