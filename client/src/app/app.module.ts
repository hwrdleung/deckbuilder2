import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StylerComponent } from './styler/styler.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SlideEditorComponent } from './slide-editor/slide-editor.component';

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
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
