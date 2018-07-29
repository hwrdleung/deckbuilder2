import { Slide } from './slide';
import { TextStyle } from './textStyle';
import { ImageStyle } from './imageStyle';
import { ShapeStyle } from './shapeStyle';

export class Project {

    private name: string;
    private slideObjectIdCounter: number;
    private styleIdCounter: number;
    private slideIdCounter: number;

    private slides: Array<Slide>;
    private textStyles: Array<TextStyle>;
    private imageStyles: Array<ImageStyle>;
    private shapeStyles: Array<ShapeStyle>;

    private selectedTextStyleId: number;
    private selectedImageStyleId: number;
    private selectedShapeStyleId: number;

    private currentSlideIndex: number;
    private selectedSlideObjectId: number;

    private sandboxText: string;
    private sandboxImage: string;
    private sandboxShape: Object;

    private format: string;

    constructor () {
        this.name = 'New Project';
        this.slideObjectIdCounter = 0;
        this.styleIdCounter = 0;
        this.slideIdCounter = 0;

        this.slides = [new Slide()];
        this.textStyles = [new TextStyle()];
        this.imageStyles = [new ImageStyle()];
        this.shapeStyles = [new ShapeStyle()];

        this.selectedTextStyleId = 0;
        this.selectedImageStyleId = 0;
        this.selectedShapeStyleId = 0;

        this.currentSlideIndex = 0;
        this.selectedSlideObjectId = 1;

        this.sandboxText = "Lorem ipsum";
    }

    getProjectProperty(propertyName){
        return this[propertyName];
    }

    setProjectProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }

    save(project:Project){
        this.name = project.name;
        this.slideObjectIdCounter = project.slideObjectIdCounter;
        this.styleIdCounter = project.styleIdCounter;
        this.slideIdCounter = project.slideIdCounter;

        this.slides = project.slides;
        this.textStyles = project.textStyles;
        this.imageStyles = project.imageStyles;
        this.shapeStyles = project.shapeStyles;

        this.selectedTextStyleId = project.selectedTextStyleId;
        this.selectedImageStyleId = project.selectedImageStyleId;
        this.selectedShapeStyleId = project.selectedShapeStyleId;

        this.currentSlideIndex = project.currentSlideIndex;
        this.selectedSlideObjectId = project.selectedSlideObjectId;

        this.sandboxText = project.sandboxText;
        this.sandboxImage = project.sandboxImage;
        this.sandboxShape = project.sandboxShape;
    }
}