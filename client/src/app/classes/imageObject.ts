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

    setImagePath(imagePath:string){
        this.imagePath = imagePath;
    }

    getImagePath(){
        return this.imagePath;
    }

    setStyleId(styleId:number){
        this.styleId = styleId;
    }

    getStyleId(){
        return this.styleId;
    }

    setImageObjectProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }
}