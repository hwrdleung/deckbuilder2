import { SlideObject } from './slideObject';

export class Slide {

    static slideCounter: number = 0;
    id: number;
    backgroundImage: string;
    backgroundColor: string;
    isDefault: boolean;

    slideObjects: Array<SlideObject>;

    constructor () {
        this.id = Slide.slideCounter++;
        this.backgroundColor = "#FFF";
        this.slideObjects = [];
        this.isDefault = false;
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    addSlideObject(slideObject: SlideObject){
        this.slideObjects.push(slideObject);
    }
    
    // Getter, setter
    getProperty(propertyName) {
        return this[propertyName];
    }

    setProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    }
}