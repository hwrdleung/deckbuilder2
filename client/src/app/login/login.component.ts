import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  embedded:boolean = false;

  loginForm: FormGroup;

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router, public data: DataService) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.data.serverMsg is shared with the home component.
    // Clearing it prevents the wrong serverMsg from being displayed on dashboard forms after user signs in.
    this.data.serverMsg = null;
  }
}
