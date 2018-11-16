import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontPickerModule } from 'ngx-font-picker';
import { FONT_PICKER_CONFIG } from 'ngx-font-picker';
import { FontPickerConfigInterface } from 'ngx-font-picker';
import { ColorPickerModule } from 'ngx-color-picker';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { StylerComponent } from '../styler/styler.component';
import { SlideEditorComponent } from '../slide-editor/slide-editor.component';
import { TextStyleCardComponent } from '../text-style-card/text-style-card.component';
import { ImageStyleCardComponent } from '../image-style-card/image-style-card.component';
import { ImageSandboxComponent } from '../image-sandbox/image-sandbox.component'
import { TextSandboxComponent } from '../text-sandbox/text-sandbox.component'
import { ToolbarAppLogicService } from '../toolbar-app-logic.service'
import { Toolbar2AppLogicService } from '../toolbar2-app-logic.service'
import { StylerAppLogicService } from '../styler-app-logic.service'
import { SandboxAppLogicService } from '../sandbox-app-logic.service'
import { SlideEditorAppLogicService } from '../slide-editor-app-logic.service'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularDraggableModule } from 'angular2-draggable';
import { ToolbarSecondaryComponent } from '../toolbar-secondary/toolbar-secondary.component';
import { PreviewComponent } from '../preview/preview.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';

const DEFAULT_FONT_PICKER_CONFIG: FontPickerConfigInterface = {
  // Change this to your Google API key
  apiKey: 'AIzaSyAP146kdUvTjlnGzyoP-cFk6_ECHSWMMfw'
};

const routes: Routes = [
  { path: '', component: MainComponent } // default route of the module
];

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    FormsModule,
    FontPickerModule,
    ColorPickerModule,
    AngularDraggableModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [    
    ToolbarComponent,
    StylerComponent,
    TextSandboxComponent,
    ImageSandboxComponent,
    SlideEditorComponent,
    TextStyleCardComponent,
    ImageStyleCardComponent,
    ToolbarSecondaryComponent,
    MainComponent,
    PreviewComponent
 
  ],

  providers: [ToolbarAppLogicService, Toolbar2AppLogicService, StylerAppLogicService, SandboxAppLogicService, SlideEditorAppLogicService, {
    provide: FONT_PICKER_CONFIG,
    useValue: DEFAULT_FONT_PICKER_CONFIG
  }],
})
export class MainModule { }
