import { SlideObject } from "./slideObject";

export class ShapeObject extends SlideObject{

    private shapeProperties: object;
    private styleId: number;

    constructor () {
        super();
    }

    
    setShapeProperties(shapeProperties:object){
        this.shapeProperties = shapeProperties;
    }

    getShapeProperties(){
        return this.shapeProperties;
    }

    setStyleId(styleId:number){
        this.styleId = styleId;
    }

    getStyleId(){
        return this.styleId;
    }
}