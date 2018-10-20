import { Slide } from './slide';
import { TextStyle } from './textStyle';
import { ImageStyle } from './imageStyle';
import { ShapeStyle } from './shapeStyle';

export class Project {

    private title: string;
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
    private images: Array<object>;

    private sandboxText: string;
    private sandboxImage: string;
    private sandboxShape: Object;

    
    private viewTextElements: boolean;
    private viewImageElements: boolean;
    private viewShapeElements: boolean;

    private textNotes: string;
    private selectedImage: number;

    private documentSize: object;
    private slideRenderMagnification;

    constructor () {
        this.title = 'New Project';
        this.slideObjectIdCounter = 0;
        this.styleIdCounter = 0;
        this.slideIdCounter = 0;

        this.slides = [];
        this.textStyles = [];
        this.imageStyles = [];
        this.shapeStyles = [];

        this.selectedTextStyleId = 0;
        this.selectedImageStyleId = 0;
        this.selectedShapeStyleId = 0;

        this.viewTextElements = true;
        this.viewImageElements = false;
        this.viewShapeElements = false;

        this.currentSlideIndex = 0;
        this.selectedSlideObjectId = 1;

        this.sandboxText = "Lorem ipsum";
        this.textNotes = "Test";
        this.images = [];
        this.selectedImage = 0;

        this.documentSize = {
            height: 432,
            width: 768
        }

        this.slideRenderMagnification = 50;
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    clearContents(){
        this.slides = [];
        this.textStyles = [];
        this.imageStyles = [];
        this.shapeStyles = [];
    }

    addSlide(slide:Slide){
        this.slides.push(slide);
    }

    addTextStyle(textStyle: TextStyle){
        this.textStyles.push(textStyle);
    }

    addImageStyle(imageStyle: ImageStyle){
        this.imageStyles.push(imageStyle);
    }

    getProjectProperty(propertyName){
        return this[propertyName];
    }

    setProjectProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }

    save(project:Project){
        this.title = project.title;
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