import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';
import { UserState } from '../state-management/state/userState';
import { Store } from '@ngrx/store';
import { NEW_PROJECT, LOAD_PROJECT } from '../state-management/actions/projectActions';
import { DocumentSize } from '../classes/documentSize';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /* DATA VARIABLES */
  userState: UserState;
  projectsData: any;
  settingsData: object;

  /*  UI VARIABLES */
  showProjects: Boolean = true;
  showSettings: Boolean = false;

  projectCreatorForm: FormGroup;
  showProjectCreator: Boolean = false;

  changePasswordForm: FormGroup;
  deleteAccountForm: FormGroup;

  requiredAlert: string = 'Required'
  nameTakenAlert: string = 'You already have a project with this name!';
  customHeightAlert: string = 'You must specify a height';
  customWidthAlert: string = 'You must specify a width';
  passwordMismatchAlert: string = 'Password do not match';

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder, private data: DataService, private dialog: DialogService, private store: Store<UserState>) {
    this.projectCreatorForm = fb.group({
      'projectName': [null, Validators.required],
      'documentSize': [null, Validators.required],
      'customHeight': [null],
      'customWidth': [null],
    }, { validator: [this.projectNamevalidator] });

    this.changePasswordForm = fb.group({
      'oldPassword': [null, Validators.required],
      'newPassword': [null, Validators.required],
      'newPassword2': [null, Validators.required]
    }, { validator: [this.passwordMatchValidator] });

    this.deleteAccountForm = fb.group({
      'password': [null, Validators.required]
    })
  }

  projectCreatorConditionalValidation() {
    let documentSizeChanges = this.projectCreatorForm.controls.documentSize.valueChanges;
    let customHeightControl = this.projectCreatorForm.controls.customHeight;
    let customWidthControl = this.projectCreatorForm.controls.customWidth;

      documentSizeChanges.subscribe(documentSize => {
         if (documentSize === 'custom') {
          customHeightControl.setValidators(Validators.required);
          customHeightControl.updateValueAndValidity();

          customWidthControl.setValidators(Validators.required);
          customWidthControl.updateValueAndValidity();
         }

         if(documentSize !== 'custom'){
          customHeightControl.setValidators(null);
          customHeightControl.updateValueAndValidity();

          customWidthControl.setValidators(null);
          customWidthControl.updateValueAndValidity();
         }
      });
  }

  passwordMatchValidator = (control: AbstractControl) => {
    let newPasswordControl = control.get('newPassword');
    let newPassword2Control = control.get('newPassword2');

    if (newPasswordControl.value !== newPassword2Control.value) return newPassword2Control.setErrors({ 'mismatch': true });
    return null;
  }

  projectNamevalidator = (control: AbstractControl) => {
    let projectNameControl = control.get('projectName');

    if (this.projectsData) {
      this.projectsData.forEach(project => {
        if (project.name === projectNameControl.value) {
          return projectNameControl.setErrors({ 'nameTaken': true });
        }
      });
    }
    return null;
  }

  ngOnInit() {
    this.projectCreatorConditionalValidation();

    this.store.select('userReducer')
      .subscribe((userState: UserState) => {
        this.userState = userState;
        this.getSettingsData();
        this.getProjectsData();
      })
  }

  test(formData) {
    console.log('test');
    console.log(formData);
  }

  /* POPULATE DATA VARIABLES */
  getProjectsData() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', this.userState.token);

    this.http.get(this.data.apiEndpoint + '/get-user-dashboard', { headers: headers })
      .subscribe(res => {
        if (res['success']) this.projectsData = res['body'].projects;
      });
  }

  getSettingsData() {
    this.settingsData = {
      'First name': this.userState.first,
      'Last name': this.userState.last,
      'Username': this.userState.username,
      'Email address': this.userState.email
    }
  }

  /*  UI CONTROLLERS */
  showContent(view: 'projects' | 'settings') {
    switch (view) {
      case 'projects':
        this.showProjects = true;
        this.showSettings = false;
        break;
      case 'settings':
        this.showProjects = false;
        this.showSettings = true;
        break;
    }
  }

  popup(form: 'project creator' | 'delete account' | 'change password', bool: boolean) {
    switch (form) {
      case 'project creator':
        this.showProjectCreator = bool;
        break;
      case 'delete account':
        this.data.showDeleteAccountForm = bool;
        break;
      case 'change password':
        this.data.showChangePasswordForm = bool;
        break;
    }
  }



  openProject(project: any) {
    this.dialog.toast(`Opening project: ${project.name}`);

    project.isLoading = true;
    let projectName = project.name;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', this.userState.token);
    headers = headers.append('project-name', projectName);

    this.http.get(this.data.apiEndpoint + '/get-project', { headers: headers })
      .subscribe(res => {
        let projectData = res['body'];

        projectData = this.data.reviveProject(projectData)
        this.store.dispatch({ type: LOAD_PROJECT, payload: { projectData: projectData } });
        this.router.navigate(['main']);
      });
  }

  deleteProject(projectName: string) {

    let confirmedDelete = () => {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('token', this.userState.token);
      headers = headers.append('project-name', projectName);

      this.http.delete(this.data.apiEndpoint + '/delete-project', { headers: headers })
        .subscribe(() => {
          this.getProjectsData();
          this.dialog.toast(`Project: ${projectName} has been deleted`);
        });
    }

    const message = `Are you sure you want to delete project: ${projectName}?`;
    this.dialog.alert(message, 'danger', confirmedDelete);

  }

  /* PROJECT CREATOR */
  createProject(formData) {
    // Parse form Data
    let projectName: string = formData.projectName;
    let options: any = {};

    switch (formData.documentSize) {
      case '1536px x 864px Presentation':
        options.height = 864;
        options.width = 1536;
        options.isCustom = false;
        options.jsPdfOrientation = 'landscape';
        options.jsPdfFormat = [16, 9];
        break;
      case '816px x 1056px A4 Document':
        options.height = 1056;
        options.width = 816;
        options.isCustom = false;
        options.jsPdfOrientation = 'portrait';
        options.jsPdfFormat = [8.5, 11];
        break;
      case 'custom':
        options.height = formData.customHeight;
        options.width = formData.customWidth;
        options.isCustom = true;
        options.jsPdfOrientation = 'portrait'
        options.jsPdfFormat = [8.5, 11];
        break;
    }

    let documentSize: DocumentSize = new DocumentSize(options);
    let payload = {
      'name': projectName,
      'documentSize': documentSize
    }

    // Create and save new project.  Route to main.
    this.store.dispatch({ type: NEW_PROJECT, payload: payload })
    this.data.saveProject()
      .then(() => {
        this.dialog.toast(`Creating new project: ${projectName}`);
        this.router.navigate(['main']);
      })
  }

  ngOnDestroy() {
    this.data.serverMsg = null;
  }
}
