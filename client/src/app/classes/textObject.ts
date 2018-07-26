import { SlideObject } from "./slideObject";

export class TextObject extends SlideObject {

    private textValue: string;
    private styleId: number;

    constructor () {
        super();
    }

    setTextvalue(textValue:string){
        this.textValue = textValue;
    }

    getTextValue(){
        return this.textValue;
    }

    setStyleId(styleId:number){
        this.styleId = styleId;
    }

    getStyleId(){
        return this.styleId;
    }
}