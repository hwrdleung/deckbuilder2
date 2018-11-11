import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';
import { UserState } from '../state-management/state/userState';
import { Store } from '@ngrx/store';
import { NEW_PROJECT, LOAD_PROJECT } from '../state-management/actions/projectActions';

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
  apiEndpoint: String = 'http://localhost:3000';

  /*  UI VARIABLES */
  showProjects: Boolean = true;
  showSettings: Boolean = false;
  showProjectCreator: Boolean = false;
  projectCreatorForm: FormGroup;
  nameTakenAlert: string = 'A project with this name already exists!';

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder, private data: DataService, private dialog: DialogService, private store: Store<UserState>) {
    this.projectCreatorForm = fb.group({
      'projectName': [null, Validators.required],
      'documentSize': [null, Validators.required]
    })
  }

  ngOnInit() {
      this.store.select('userReducer')
      .subscribe((userState: UserState) => {
        this.userState = userState;
        this.getSettingsData();
        this.getProjectsData();
      })
  }

  /* POPULATE DATA VARIABLES */
  getProjectsData() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', this.userState.token);
    console.log(headers);

    this.http.get(this.apiEndpoint + '/get-user-dashboard', { headers: headers })
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

  popupProjectCreator(bool: boolean) {
    this.showProjectCreator = bool;
  }

  openProject(projectName: string) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', this.userState.token);
    headers = headers.append('project-name', projectName);
    console.log(headers);

    this.http.get(this.apiEndpoint + '/get-project', { headers: headers })
      .subscribe(res => {
        let projectData = res['body'];

        projectData = this.data.reviveProject(projectData)
        console.log(projectData);
        this.store.dispatch({ type: LOAD_PROJECT, payload: { projectData: projectData } });
        this.router.navigate(['main']);
      });
  }

  deleteProject(projectName: string) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', this.userState.token);
    headers = headers.append('project-name', projectName);
    console.log(headers);

    this.http.delete(this.apiEndpoint + '/delete-project', { headers: headers })
      .subscribe(() => {
        this.getProjectsData();
      });
  }

  /* PROJECT CREATOR */
  createProject(formData) {
    // Parse form Data
    let projectName: string = formData.projectName;
    let documentSize: object = {};

    switch (formData.documentSize) {
      case '768 x 432 Landscape':
        documentSize['height'] = 432,
          documentSize['width'] = 768
    }

    let payload = {
      'name': projectName,
      'documentSize': documentSize
    }

    // Create and save new project.  Route to main.
    this.store.dispatch({ type: NEW_PROJECT, payload: payload })
    this.data.saveProject()
      .then(() => {
        this.router.navigate(['main']);
      })
  }
}
