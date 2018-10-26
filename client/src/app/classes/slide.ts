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

    addSlideObject(slideObject: SlideObject){
        this.slideObjects.push(slideObject);
    }

    // deleteSlideObjectById(id){
    //     for(let i=0; i<this.slideObjects.length; i++){
    //         if(this.slideObjects[i].getProperty('id') === id){
    //             this.slideObjects.splice(i, 1);
    //         }
    //     }
    // }

    // Getter, setter
    getProperty(propertyName) {
        return this[propertyName];
    }

    setProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    }
}