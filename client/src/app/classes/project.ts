import { Slide } from './slide';
import { TextStyle } from './textStyle';
import { ImageStyle } from './imageStyle';
import { ShapeStyle } from './shapeStyle';
import { TextObject } from './textObject';
import { ImageObject } from './imageObject';
import { BorderControl } from './borderControl';
import { ShadowControl } from './shadowControl';
import { GalleryImage } from './galleryImage';
import { SlideObject } from './slideObject';


export class Project {

    private name: string;
    private created: Date;
    private thumbnail: string;
    private slideObjectIdCounter: number;


    private slides: Array<Slide>;
    private textStyles: TextStyle[];
    private imageStyles: ImageStyle[];

    private selectedTextStyle: TextStyle;
    private selectedImageStyle: ImageStyle;

    private currentSlide: Slide;
    private selectedSlideObject: SlideObject;
    private images: GalleryImage[];

    private sandboxText: string;
    private sandboxImage: string;

    private viewTextElements: boolean;
    private viewImageElements: boolean;

    private textNotes: string;
    private selectedImage: GalleryImage;

    private documentSize: object;
    private slideRenderMagnification: number;

    constructor() {
        this.name = 'New Project';
        this.created = new Date();
        this.thumbnail = 'https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg'
        this.slideObjectIdCounter = 0;
  
        this.slides = [this.createDefaultSlide()];
        this.textStyles = [this.createDefaultTextStyle()];
        this.imageStyles = [this.createDefaultImageStyle()];
 
        this.viewTextElements = true;
        this.viewImageElements = false;

        this.currentSlide;
        this.selectedSlideObject;

        this.sandboxText = "Lorem ipsum";
        this.textNotes = "Add your notes here...";
        this.images = [];
        this.selectedImage;

        this.documentSize = {
            height: 432,
            width: 768
        }

        this.slideRenderMagnification = 50;
    }

    createDefaultTextStyle() {
        let textStyle = new TextStyle();
        textStyle.name = 'Default Text Style';
        textStyle..isDefault = true;
        return textStyle;
    }

    createDefaultImageStyle() {
        let imageStyle = new ImageStyle();
        imageStyle.setProperty('name', 'Default Image Style');
        imageStyle.setProperty('isDefault', true);
        return imageStyle;
    }

    createDefaultSlide(){
        let slide = new Slide();
        slide.isDefault = true;
        return slide;
    }

    revive(jsonData) {

        for (let key in savedProjectData) {
            this[key] = savedProjectData[key];
        }

        this.reviveGalleryImages(jsonData);
        this.reviveSlides(jsonData);
        this.reviveTextStyles(jsonData);
        this.reviveImageStyles(jsonData);
    }

    reviveSlides(jsonData) {
        let savedProjectData = JSON.parse(jsonData);

        this.slides = [];
        for (let i = 0; i < savedProjectData.slides.length; i++) {
            let thisSlide = savedProjectData.slides[i]
            let slide = new Slide();
            slide.revive(thisSlide);

            let slideObjects = [];
            for (let j = 0; j < thisSlide.slideObjects.length; j++) {
                let thisSlideObject = thisSlide.slideObjects[j];

                if (thisSlideObject.hasOwnProperty('textValue')) {
                    // Revive text object
                    let textObject = new TextObject();
                    textObject.revive(thisSlideObject);
                    slideObjects.push(textObject);
                } else if (thisSlideObject.hasOwnProperty('imagePath')) {
                    // Revive image object
                    let imageObject = new ImageObject();
                    imageObject.revive(thisSlideObject);
                    slideObjects.push(imageObject);
                }
                slide.setProperty('slideObjects', slideObjects);
            }
            this.slides.push(slide);
        }
    }

    reviveTextStyles(jsonData) {
        let savedProjectData = JSON.parse(jsonData);
        this.textStyles = [];

        // Revive text styles
        for (let i = 0; i < savedProjectData.textStyles.length; i++) {
            let thisTextStyle = savedProjectData.textStyles[i];
            let textStyle = new TextStyle();
            textStyle.revive(thisTextStyle);

            // Revive borders
            let border = new BorderControl();
            border.revive(thisTextStyle.border);
            textStyle.setProperty('border', border);

            // Revive shadows
            let shadow = new ShadowControl();
            shadow.revive(thisTextStyle.textShadow);
            textStyle.setProperty('textShadow', shadow);

            this.textStyles.push(textStyle);
        }
    }

    reviveGalleryImages(jsonData){
        let savedProjectData = JSON.parse(jsonData);
        this.images = [];
        
        for(let i = 0;i < savedProjectData.images.length; i++){
            let thisImage = savedProjectData.images[i];
            let galleryImage = new GalleryImage;
            galleryImage.revive(thisImage);
            this.images.push(galleryImage);
        }
    }

    reviveImageStyles(jsonData) {
        let savedProjectData = JSON.parse(jsonData);
        this.imageStyles = [];

        for (let i = 0; i < savedProjectData.imageStyles.length; i++) {
            let thisImageStyle = savedProjectData.imageStyles[i];
            let imageStyle = new ImageStyle();
            imageStyle.revive(thisImageStyle);

            // Revive borders
            let border = new BorderControl();
            border.revive(thisImageStyle.border);
            imageStyle.setProperty('border', border);

            this.imageStyles.push(imageStyle);
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