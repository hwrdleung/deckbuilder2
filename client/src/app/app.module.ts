import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontPickerModule } from 'ngx-font-picker';
import { FONT_PICKER_CONFIG } from 'ngx-font-picker';
import { FontPickerConfigInterface } from 'ngx-font-picker';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StylerComponent } from './styler/styler.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SlideEditorComponent } from './slide-editor/slide-editor.component';
import { TextStyleCardComponent } from './text-style-card/text-style-card.component';
import { ImageStyleCardComponent } from './image-style-card/image-style-card.component';

import { DataService } from './data.service';
import { DialogService } from './dialog.service';
import { ToolbarAppLogicService } from './toolbar-app-logic.service'
import { Toolbar2AppLogicService } from './toolbar2-app-logic.service'
import { StylerAppLogicService } from './styler-app-logic.service'
import { SandboxAppLogicService } from './sandbox-app-logic.service'
import { SlideEditorAppLogicService } from './slide-editor-app-logic.service'


import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularDraggableModule } from 'angular2-draggable';
import { DialogComponent } from './dialog/dialog.component';
import { ToolbarSecondaryComponent } from './toolbar-secondary/toolbar-secondary.component';

import { HttpClientModule } from '@angular/common/http';

const DEFAULT_FONT_PICKER_CONFIG: FontPickerConfigInterface = {
  // Change this to your Google API key
  apiKey: 'AIzaSyAP146kdUvTjlnGzyoP-cFk6_ECHSWMMfw'
};

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StylerComponent,
    SandboxComponent,
    SlideEditorComponent,
    TextStyleCardComponent,
    ImageStyleCardComponent,
    DialogComponent,
    ToolbarSecondaryComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    FontPickerModule,
    ColorPickerModule,
    AngularDraggableModule,
    HttpClientModule
  ],
  providers: [ToolbarAppLogicService, Toolbar2AppLogicService, StylerAppLogicService, SandboxAppLogicService, SlideEditorAppLogicService, DataService, DialogService, {
    provide: FONT_PICKER_CONFIG,
    useValue: DEFAULT_FONT_PICKER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
