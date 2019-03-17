import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';
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
  userState;
  projectsData: any;
  settingsData: object;
  openMobileNav: boolean = false;

  /*  UI VARIABLES */
  showProjects: Boolean = true;
  showSettings: Boolean = false;

  /* POPUP FORM VARIABLES */
  projectCreatorForm: FormGroup;
  showProjectCreator: Boolean = false;
  changePasswordForm: FormGroup;
  deleteAccountForm: FormGroup;
  requiredAlert: string = 'Required'
  nameTakenAlert: string = 'You already have a project with this name!';
  customHeightAlert: string = 'You must specify a height';
  customWidthAlert: string = 'You must specify a width';
  passwordMismatchAlert: string = 'Password do not match';

  /*  USERSTATE SUBSCRIPTION */
  userStateSubscription

  constructor(public router: Router, public http: HttpClient, public fb: FormBuilder, public data: DataService, public dialog: DialogService, public store: Store<any>) {
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
    });
  }

  projectCreatorConditionalValidation() {
    // This function subscribes to the documentSize form control
    // and sets the appropriate validations based on the user's documentSize selection.
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

      if (documentSize !== 'custom') {
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
    // This validator marks the projectName form control as "invalid" if its value matches
    // another project's name
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
    // Subscribe to projectCreatorForm's value changes to enable conditional validations
    this.userStateSubscription = this.store.select('userReducer').subscribe(userState => {
      this.userState = userState;
      this.getSettingsData();
      this.getProjectsData();
    })

    this.projectCreatorConditionalValidation();
  }

  /* POPULATE DATA VARIABLES */
  getProjectsData() {
    // This function makes a call to the back-end to get project data for the dashboard.
    // The "projects" property that is returned by the back-end does not contain full project data.
    //  It only consists of the minimal data required for the template's project cards.
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', this.userState.token);
    this.http.get(this.data.apiEndpoint + '/get-user-dashboard', { headers: headers })
      .subscribe(res => {
        if (res['success']) this.projectsData = res['body'].projects;
      });
  }

  getSettingsData() {
    // This function populates the settingsData variable with the data from userState.
    // settingsData is used in the template's "settings" view.
    this.settingsData = {
      'First name': this.userState.first,
      'Last name': this.userState.last,
      'Username': this.userState.username,
      'Email address': this.userState.email
    }
  }

  showContent(view: 'projects' | 'settings') {
    // This function serves as the UI controller for the dashboard's left vertical nav bar.
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

  toggleMobileNav(){
    // This function serves as the UI controller for displaying the vertical mobile nav menu
    this.openMobileNav = !this.openMobileNav;
  }

  popup(form: 'project creator' | 'delete account' | 'change password', bool: boolean) {
    // This function serves as the UI controller for the displaying of popup forms 
    // in the dashboard's "settings" view.
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
    // When user "opens" a project, this function makes a call to the back-end to fetch 
    // full data for the selected project, loads it into the store, and routes to the main.
    this.dialog.toast(`Opening project: ${project.name}`);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', this.userState.token);
    headers = headers.append('project-name', project.name);
    this.http.get(this.data.apiEndpoint + '/get-project', { headers: headers })
      .subscribe(res => {
        let projectData = res['body'];
        projectData = this.data.reviveProject(projectData)
        this.store.dispatch({ type: LOAD_PROJECT, payload: { projectData: projectData } });
        this.router.navigate(['main']);
      });
  }

  deleteProject(projectName: string) {
    // This function prompts user for confirmation to delete a project,
    // and sends a delete request to the back-end if user chooses to proceed.
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

  createProject(formData) {
    // This function handles the ngSubmit for the projectCreatorForm
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
        options.jsPdfOrientation = options.height > options.width ? 'portrait' : 'landscape';
        options.jsPdfFormat = options.jsPdfOrientation === 'portrait' ? [8.5, 11] : [16, 9];
        break;
    }

    let documentSize: DocumentSize = new DocumentSize(options);
    let payload = {
      'name': projectName,
      'documentSize': documentSize
    }

    // Create and save new project.  Route to main.
    this.dialog.toast(`Creating new project: ${projectName}`);
    this.store.dispatch({ type: NEW_PROJECT, payload: payload })
    this.router.navigate(['main']);
    // Saving of the project is handled at the time that user navigates away from main
  }

  ngOnDestroy() {
    // data.serverMsg is shared with the login and registration components.
    // Clearing it onDestroy prevents the displaying the wrong serverMsg on the wrong form
    this.data.serverMsg = null;
    this.userStateSubscription.unsubscribe();

  }
}
