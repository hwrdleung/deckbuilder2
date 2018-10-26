import { SlideObject } from "./slideObject";

export class TextObject extends SlideObject {

    private textValue: string;
    private editTextMode: boolean;
    private styleId: number;

    constructor () {
        super();
        this.editTextMode = false;
        this.styleId = 0;
        this.textValue = "Lorem Ipsum";
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