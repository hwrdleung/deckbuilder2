import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Project } from '../classes/project';
import { DataService } from '../data.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apiEndpoint: String = 'http://localhost:3000';
  isSignedIn: Boolean = sessionStorage.getItem('currentUser') ? true : false;
  showProjects: Boolean = true;
  showSettings: Boolean = false;
  showProjectCreator: Boolean = false;
  projectsData: Object[];
  settingsData: Object;

  projectCreatorForm: FormGroup;
  nameTakenAlert: string = 'A project with this name already exists!';

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder, private data:DataService, private dialog:DialogService) {
    this.projectCreatorForm = fb.group({
      'projectName': [null, Validators.required],
      'documentSize': [null, Validators.required]
    }, { Validators: [this.projectNameValidator] });
  }

  ngOnInit() {
    this.refreshDashboard();
  }


  /*  DASHBOARD NAV FUNCTIONS */
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

  signOut() {
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  /* DASHBOARD PROJECTS VIEW FUNCTIONS */
  refreshDashboard() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('token', sessionStorage.getItem('currentUser'))

    this.http.get(this.apiEndpoint + '/get-user-dashboard', { headers: headers }).subscribe(res => {
      console.log(res);
      this.projectsData = res['body']['projects'];
      this.settingsData = {
        'First Name': res['body']['first'],
        'Last Name': res['body']['last'],
        'Email Address': res['body']['email'],
        'Username': res['body']['username'],
      }
      console.log('settingsData', Object.keys(this.settingsData));
    })
  }

  openProject(projectName:string){
    this.data.loadProject(projectName);
    this.router.navigate(['main']);
  }

  deleteProject(projectName:string){

    this.dialog.alert('Delete project ' + projectName + '?', 'danger', () => {

      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('token', sessionStorage.getItem('currentUser'))
      headers = headers.append('project-name', projectName);
  
      this.http.delete(this.apiEndpoint + '/delete-project', {headers: headers}).subscribe(res => {
        console.log(res);
        if(res['success']) this.refreshDashboard();
      });
    })
  }

  /*  PROJECT CREATOR FUNCTIONS */

  openProjectCreator() {
    this.showProjectCreator = true;
  }

  closeProjectCreator() {
    this.showProjectCreator = false;
  }

  createProject(formData) {
    console.log('Create Project');
    console.log(formData);

    // Parse form data
    let name = formData.projectName;
    let documentSize = {};

    if (formData.documentSize === "768 x 432 Landscape") {
      documentSize['height'] = 432;
      documentSize['width'] = 768;
    }

    // Create new project
    let newProject = new Project();
    newProject.setProperty('name', name);
    newProject.setProperty('documentSize', documentSize);

    let body = {
      token: sessionStorage.getItem('currentUser'),
      project: JSON.stringify(newProject)
    }

    // Save to DB
    this.saveProject(body)
    .then((res)=> {
      // Load project and route to main
       this.data.loadProject(name);
       this.router.navigate(['main']);
    })
  }

  saveProject = (body) => {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiEndpoint + '/save-project', body).subscribe(res => {
        console.log(res);
        if(res['success'] === false) reject(Error(res['message']));
        resolve(res);
      })
    })
  }

  projectNameValidator(control: AbstractControl) {
    let projectName = control.get('projectName').value;

    for (let i = 0; i < this.projectsData.length; i++) {
      if (this.projectsData[i]['name'] === projectName) {
        return control.get('projectName').setErrors({ 'nameTaken': true });
      }
    }
    return null;
  }

}
