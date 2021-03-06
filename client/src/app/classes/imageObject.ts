import { SlideObject } from "./slideObject";
import { ImageStyle } from "./imageStyle";

export class ImageObject extends SlideObject {

    imagePath: string;
    style: ImageStyle;
    fileName: string;

    constructor () {
        super();
        this.type = 'ImageObject';
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