import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { userReducer } from "./state-management/reducers/userReducer";
import { projectReducer } from "./state-management/reducers/projectReducer";
import { StoreModule } from "@ngrx/store";
import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'main', loadChildren: './main/main.module#MainModule' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    StoreModule.forRoot({ userReducer, projectReducer })
  ],
  providers: [DataService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
