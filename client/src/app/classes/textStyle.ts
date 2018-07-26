import { Project } from "./project";

export class TextStyle{

    private static textStyleCounter:number = 0;
    private name: string;
    private id: number;
    private editNameMode: boolean;
    private fontPickerData: object; // Google font picker defines this format.  It includes family, size, and style
    private color: string;
    private underline: boolean;
    private hAlign: string;

    constructor () {
        this.id = TextStyle.textStyleCounter++;
        this.name = 'TextStyle' + TextStyle.textStyleCounter;
        this.editNameMode = false;
        this.color = '#000';
        this.underline = false;
        this.hAlign = 'left';
    }

    getCss(){
        let css = {
            'font-family': this.fontPickerData['family'],
            'font-style': this.fontPickerData['style'],
            'color': this.color,
            'font-size' : this.calculateRenderFontSize(),
            'text-align': this.hAlign,
            'text-decoration' : this.underline ? 'underline' : 'none',
        }

        return css;
    }

    calculateRenderFontSize(){
        // Convert PT to pixels
        let fontSizePt = this.fontPickerData['size'];
        let fontSizePx = fontSizePt * (96/72);

        // Scale down for slide render
        let slideRenderWidth = document.querySelector('.slide-render').clientWidth;
        let scaleDownFactor = slideRenderWidth * 768 // This must be changed to a dynamic variable set by user

        let renderFontSizePx = fontSizePx * scaleDownFactor;
        return renderFontSizePx;        
    }

    getStyleProperty(propertyName){
        return this[propertyName];
    }

    setStyleProperty(propertyName:string, propertyValue:any){
        this[propertyName] = propertyValue;
    }

    toggleEditNameMode(){
        this.editNameMode = !this.editNameMode;
    }
}