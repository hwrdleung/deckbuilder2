import { SlideObject } from './slideObject';

export class Slide {

    private static slideCounter: number = 0;
    private id: number;

    private backgroundImage: string;
    private backgroundColor: string;

    private slideHeight: number;
    private slideWidth: number;

    private renderHeight: number;
    private renderWidth: number;

    private slideObjects: Array<SlideObject>;

    constructor () {
        this.id = Slide.slideCounter++;
        this.backgroundImage = "";
        this.backgroundColor = "#FFF";
        this.slideHeight = 432;
        this.slideWidth = 768;
        this.slideObjects = [];
    }

    getSlideProperty(propertyName){
        return this[propertyName];
    }

    setSlideProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }

    addSlideObject(slideObject: SlideObject){
        this.slideObjects.push(slideObject);
    }

    deleteSlideObjectById(id){
        for(let i=0; i<this.slideObjects.length; i++){
            if(this.slideObjects[i].getSlideObjectProperty('id') === id){
                this.slideObjects.splice(i, 1);
            }
        }
    }
}