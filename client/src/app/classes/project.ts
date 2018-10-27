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

    constructor() {
        this.title = 'New Project';
        this.slideObjectIdCounter = 0;
        this.styleIdCounter = 0;
        this.slideIdCounter = 0;

        this.slides = [new Slide()];
        this.textStyles = [this.createDefaultTextStyle()];
        this.imageStyles = [this.createDefaultImageStyle()];

        this.selectedTextStyleId = 0;
        this.selectedImageStyleId = 0;
        this.selectedShapeStyleId = 0;

        this.viewTextElements = true;
        this.viewImageElements = false;
        this.viewShapeElements = false;

        this.currentSlideIndex = 0;
        this.selectedSlideObjectId = 1;

        this.sandboxText = "Lorem ipsum";
        this.textNotes = "Add your notes here...";
        this.images = [];
        this.selectedImage = 0;

        this.documentSize = {
            height: 432,
            width: 768
        }

        this.slideRenderMagnification = 50;
    }

    createDefaultTextStyle () {
        let textStyle = new TextStyle();
        textStyle.setProperty('name', 'Default Text Style');
        textStyle.setProperty('isDefault', true);
        return textStyle;
    }

    createDefaultImageStyle () {
        let imageStyle = new ImageStyle();
        imageStyle.setProperty('name', 'Default Image Style');
        imageStyle.setProperty('isDefault', true);
        return imageStyle;
    }

    reviveFullProject (JSON: object) {

    }

    revive(obj) {
        for (let key in obj) {
            this[key] = obj[key];
        }
    }

    addSlide(slide: Slide) {
        this.slides.push(slide);
    }

    addTextStyle(textStyle: TextStyle) {
        this.textStyles.push(textStyle);
    }

    addImageStyle(imageStyle: ImageStyle) {
        this.imageStyles.push(imageStyle);
    }

    getProperty(propertyName) {
        return this[propertyName];
    }

    setProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    }
}