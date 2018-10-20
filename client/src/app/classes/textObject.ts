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

    toggleEditTextMode(){
        this.editTextMode = !this.editTextMode;
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

    setTextObjectProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }

    getStyleId(){
        return this.styleId;
    }
}