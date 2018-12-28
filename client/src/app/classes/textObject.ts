import { SlideObject } from "./slideObject";
import { TextStyle } from "./textStyle";

export class TextObject extends SlideObject {

    textValue: string;
    editTextMode: boolean;
    style: TextStyle;

    constructor () {
        super();
        this.editTextMode = false;
        this.textValue = "Lorem Ipsum";
        this.type = 'TextObject';
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    // Getter, setter, toggler
    getProperty(propertyName) {
        return this[propertyName];
    }

    setProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    }

    toggleProperty(propertyName:string){
        if(typeof this[propertyName] === 'boolean')
        this[propertyName] = !this[propertyName];
    }
}