import { SlideObject } from "./slideObject";

export class ShapeObject extends SlideObject{

    private shapeProperties: object;
    private styleId: number;

    constructor () {
        super();
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