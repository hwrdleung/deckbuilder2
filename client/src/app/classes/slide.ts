import { SlideObject } from './slideObject';

export class Slide {

    private static slideCounter: number = 0;
    private id: number;
    private backgroundImage: string;
    private backgroundColor: string;

    private slideObjects: Array<SlideObject>;

    constructor () {
        this.id = Slide.slideCounter++;
        this.backgroundColor = "#FFF";
        this.slideObjects = [];
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
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

    clearSlideObjects(){
        this.slideObjects = [];
    }

    deleteSlideObjectById(id){
        for(let i=0; i<this.slideObjects.length; i++){
            if(this.slideObjects[i].getSlideObjectProperty('id') === id){
                this.slideObjects.splice(i, 1);
            }
        }
    }
}