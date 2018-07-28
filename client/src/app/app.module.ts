import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StylerComponent } from './styler/styler.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SlideEditorComponent } from './slide-editor/slide-editor.component';
import { DataService } from './data.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StylerComponent,
    SandboxComponent,
    SlideEditorComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
