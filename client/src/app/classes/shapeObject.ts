import { SlideObject } from './slideObject';
import { ShapeStyle } from './shapeStyle';

export class ShapeObject extends SlideObject {

    shapeType: 'square';
    style: ShapeStyle;

    constructor() {
        super();
        this.shapeType = 'square';
    }

    // Define all svg shape data here
    getSvgHTML() {

        let html;
        let parser = new DOMParser();

        switch (this.shapeType) {
            case 'square':

                break;
        }

        return html;
    }

    getAllShapeTypes() {
        // This function returns an array containing all available shapes and their svg data.
        // Selected shape style is defined by the user, in the style selector menu (top toolbar)
        // Used in shape sandbox for rendering shape preview and shape selector menu
        return ['square'];
    }

    // Used for restoring prototypes when loading JSON project data from database
    revive(obj) {
        for (let key in obj) {
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

}