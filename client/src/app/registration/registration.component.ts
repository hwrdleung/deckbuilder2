import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  apiEndpoint:string = 'http://localhost:3000';

  rForm: FormGroup;
  serverMsg: string = '';
  requiredAlert: string = 'Required';
  passwordMismatchAlert: string = 'Passwords do not match';
  emailAlert: string = 'Invalid email address'
  requiredLengthAlert: string = 'Minimum length: ';

  constructor(private fb: FormBuilder, private http:HttpClient, private router: Router) {
    this.rForm = fb.group({
      'first' : [null, Validators.required],
      'last' : [null, Validators.required],
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'password2' : [null, Validators.required]
    }, { validator: this.passwordMatchValidator});
   }

  ngOnInit() {
  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password').value === control.get('password2').value ? null : control.get('password2').setErrors({ 'passwordMismatch': true });
  }

  register(formData) {
      this.http.post(this.apiEndpoint + '/new-account', formData).subscribe(res => {
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
