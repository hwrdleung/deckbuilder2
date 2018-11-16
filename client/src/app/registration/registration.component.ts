import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  /*  UI VARIABLES */
  rForm: FormGroup;
  requiredAlert: string = 'Required';
  passwordMismatchAlert: string = 'Passwords do not match';
  emailAlert: string = 'Invalid email address'
  requiredLengthAlert: string = 'Minimum length: ';

  constructor(private data:DataService, private fb: FormBuilder, private http:HttpClient, private router: Router) {
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
    // This validator makes sure that the passwords match
    return control.get('password').value === control.get('password2').value ? null : control.get('password2').setErrors({ 'passwordMismatch': true });
  }

ngOnDestroy(){
  // data.serverMsg is shared with dashboard.
  // Clearing it prevents the wrong serverMsg from being displayed in the dashboard.
  this.data.serverMsg = null;
}

}
