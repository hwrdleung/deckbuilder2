import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apiEndpoint:string = 'http://localhost:3000';
  loginForm: FormGroup;
  serverMsg: string = '';

  constructor(private fb: FormBuilder, private http:HttpClient, private router: Router) {
    this.loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    })
   }

  ngOnInit() {
  }

  login(formData) {
    this.http.post(this.apiEndpoint + '/auth', formData).subscribe((res) => {

      console.log(res);

      if(res['success']) {
        this.serverMsg = res['message'];
        let token = res['body'];
        sessionStorage.setItem('currentUser', token);
        this.router.navigate(['dashboard']);
      } else if (!res['success']) {
        // Display error message to form
        this.serverMsg = res['message'];
      }
  })
}

}
