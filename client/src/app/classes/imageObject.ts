import { SlideObject } from "./slideObject";

export class ImageObject extends SlideObject {

    private imagePath: string;
    private styleId: number;

    constructor () {
        super();
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    // Setter, getter
    setProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }
    
    getProperty(propertyName) {
        return this[propertyName];
    }
}