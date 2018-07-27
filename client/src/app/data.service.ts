import { Injectable } from '@angular/core';
import { Project } from './classes/project';
import { Slide } from './classes/slide';
import { TextStyle } from './classes/textStyle';
import { ImageStyle } from './classes/imageStyle';
import { ShapeStyle } from './classes/shapeStyle';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentProject: Project;

  name: string;
  slideObjectIdCounter: number;
  styleIdCounter: number;
  slideIdCounter: number;

  slides: Array<Slide>;
  textStyles: Array<TextStyle>;
  imageStyles: Array<ImageStyle>;
  shapeStyles: Array<ShapeStyle>;

  selectedTextStyleId: number;
  selectedImageStyleId: number;
  selectedShapeStyleId: number;

  currentSlideIndex: number;
  selectedSlideObjectId: number;

  sandboxText: string;
  sandboxImage: string;
  sandboxShape: Object;

  format: string;

  constructor() {
    // Set default values
    let newProject = new Project();
    this.loadProject(newProject);

   }

  test(){
    console.log('Test');
  }

  loadProject(project:Project){
    this.name = project.getProjectProperty('name');
    this.slideObjectIdCounter = project.getProjectProperty('slideObjectIdCounter');
    this.styleIdCounter = project.getProjectProperty('styleIdCounter');
    this.slideIdCounter = project.getProjectProperty('slideIdCounter');

    this.slides = project.getProjectProperty('slides');
    this.textStyles = project.getProjectProperty('textStyles');
    this.imageStyles = project.getProjectProperty('imageStyles');
    this.shapeStyles = project.getProjectProperty('shapeStyles');

    this.selectedTextStyleId = project.getProjectProperty('selectedTextStyleId');
    this.selectedImageStyleId = project.getProjectProperty('selectedImageStyleId');
    this.selectedShapeStyleId = project.getProjectProperty('selectedShapeStyleId');

    this.currentSlideIndex = project.getProjectProperty('currentSlideIndex');
    this.selectedSlideObjectId = project.getProjectProperty('selectedSlideObjectId');

    this.sandboxText = project.getProjectProperty('sandboxText');
    this.sandboxImage = project.getProjectProperty('sandboxImage');
    this.sandboxShape = project.getProjectProperty('sandboxShape');

    this.format = project.getProjectProperty('format');
  }

}
