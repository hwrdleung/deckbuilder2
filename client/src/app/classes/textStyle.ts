import { Project } from "./project";
import { BorderControl } from "./borderControl";
import { ShadowControl } from "./shadowControl";

export class TextStyle{

    private static textStyleCounter:number = 0;
    private name: string;
    private id: number;
    private editNameMode: boolean;
    private showExtraOptions: boolean;
    private fontPickerData: object; // Google font picker defines this format.  It includes family, size, and style
    private color: string;
    private backgroundColor: string;
    private underline: boolean;
    private overline: boolean;
    private lineThrough: boolean;
    private hAlign: string;
    private vAlign: string;
    private uppercase: boolean;
    private lowercase: boolean;
    private lineHeight: number;
    private wordSpacing: number;
    private opacity: number;
    private letterSpacing: number;
    private textShadow: ShadowControl;
    private margin: number;
    private padding: number;
    private breakWord: boolean;
    private border: BorderControl;

    constructor () {
        this.id = TextStyle.textStyleCounter++;
        this.name = 'TextStyle' + TextStyle.textStyleCounter;
        this.editNameMode = false;
        this.showExtraOptions = false;
        this.color = '#000';
        this.backgroundColor = 'none';
        this.underline = false;
        this.overline = false;
        this.lineThrough = false;
        this.hAlign = 'left';
        this.vAlign = 'top';
        this.opacity = 1;
        this.uppercase = false;
        this.lowercase = false;
        this.lineHeight = 1;
        this.margin = 0;
        this.padding = 0;
        this.wordSpacing = 0;
        this.letterSpacing = 0;
        this.breakWord = false;
        this.border = new BorderControl();
        this.textShadow = new ShadowControl();
        this.fontPickerData = {
            family: 'Helvetica',
            style: 'regular',
            size: '25'
        }
    }

    getCss(){
        let css = {
            'font-family': this.fontPickerData['family'],
            'font-style': this.fontPickerData['style'],
            'color': this.color,
            'background-color' : this.backgroundColor,
            'font-size' : this.fontPickerData['size'],
            'text-align': this.hAlign,
            'vertical-align' : this.vAlign,
            'text-decoration' : this.getTextDecoration(),
            'text-transform' : this.getTextTransform(),
            'line-height' : this.lineHeight,
            'word-spacing' : this.wordSpacing + 'px',
            'opacity' : this.opacity,
            'letter-spacing' : this.letterSpacing + 'px',
            'word-wrap' : this.breakWord ? 'break-word' : 'normal',
            'border-top' : this.border.getBorderProperty('showTopBorder') ? this.border.getTopBorderCss() : 'none',
            'border-right' : this.border.getBorderProperty('showRightBorder') ? this.border.getRightBorderCss() : 'none',
            'border-bottom' : this.border.getBorderProperty('showBottomBorder') ? this.border.getBottomBorderCss() : 'none',
            'border-left' : this.border.getBorderProperty('showLeftBorder') ? this.border.getLeftBorderCss() : 'none',
            'border' : this.border.getBorderProperty('showFullBorder') ? this.border.getFullBorderCss() : 'none',
            'text-shadow' : this.textShadow.getShadowProperty('showShadow') ? this.textShadow.getShadowCss() : 'none',
            'margin' : this.margin + 'px',
            'padding' : this.padding + 'px'
        }
        return css;
    }

    getTextTransform(){
        let textTransform = "";

        if(!this.uppercase && !this.lowercase){
            return 'none';
        }

        if(this.uppercase){
            return 'uppercase';
        }

        if(this.lowercase){
            return 'lowercase';
        }
    }
    
    getTextDecoration(){
        let textDecoration = "";

        if(!this.underline && !this.overline && !this.lineThrough){
            return 'none';
        }

        if(this.underline){
            textDecoration += "underline";
        }

        if(this.overline){
            textDecoration += "overline";
        }

        if(this.lineThrough){
            textDecoration += "line-through";
        }
        return textDecoration;
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

    toggleStyleProperty(propertyName:string){
        this[propertyName] = !this[propertyName];
    }

    toggleEditNameMode(){
        this.editNameMode = !this.editNameMode;
    }

    toggleExtraOptions(){
        this.showExtraOptions = !this.showExtraOptions;
    }
}