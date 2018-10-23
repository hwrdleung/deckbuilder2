import { BorderControl } from "./borderControl";

export class ImageStyle {

    private static imageStyleCounter:number = 0;
    private name: string;
    private id: number;
    private editNameMode: boolean;
    private showExtraOptions: boolean;
    private isDefault : Boolean;

    // Borders
    private border: BorderControl;

    // Filters
    private opacity: number;
    private grayscale: number;
    private blur: number; // px
    private brightness: number;
    private contrast: number; 
    private dropShadow: object;
    private hueRotate: number; // deg
    private invert: number; // %
    private saturate: number; // %
    private sepia: number; // %

    constructor () {
        this.id = ImageStyle.imageStyleCounter++;
        this.name = 'ImageStyle' + ImageStyle.imageStyleCounter;
        this.editNameMode = false;
        this.showExtraOptions = false;
        this.opacity = 100;
        this.grayscale = 0;
        this.blur = 0;
        this.brightness = 100;
        this.contrast = 100;
        this.hueRotate = 0;
        this.invert = 0;
        this.saturate = 100;
        this.sepia = 0;
        this.border = new BorderControl();
        this.isDefault = false;
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    getCss(){
        let css = {
            'border-radius': this.border.getBorderRadiusCss(),
            'filter' : this.getFilters(),
            'box-sizing' : 'border-box'
        }

        if (this.border.getBorderProperty('showFullBorder')) {
            css['border'] = this.border.getFullBorderCss();
        } else if (!this.border.getBorderProperty('showFullBorder')) {
            css['border-top'] = this.border.getBorderProperty('showTopBorder') ? this.border.getTopBorderCss() : 'none';
            css['border-right'] = this.border.getBorderProperty('showRightBorder') ? this.border.getRightBorderCss() : 'none';
            css['border-bottom'] = this.border.getBorderProperty('showBottomBorder') ? this.border.getBottomBorderCss() : 'none';
            css['border-left'] = this.border.getBorderProperty('showLeftBorder') ? this.border.getLeftBorderCss() : 'none';
        }

        return css;
    }

    getFilters(){
        let cssFilters: string = "";

        // Default values:
        let defaultOpacity = 1;
        let defaultGrayscale = 0;
        let defaultBlur = 0;
        let defaultBrightness = 1;
        let defaultContrast = 1;

        let defaultHueRotate = 0;
        let defaultInvert = 0;
        let defaultSaturate = 1;
        let defaultSepia = 0;

        if(this.opacity !== defaultOpacity){
            cssFilters += 'opacity(' + this.opacity/100 + ') ';
        }

        if(this.grayscale !== defaultGrayscale){
            cssFilters += 'grayscale(' + this.grayscale/100 + ') ';
        }

        if(this.blur !== defaultBlur){
            cssFilters += 'blur(' + this.blur + 'px) ';
        }

        if(this.brightness !== defaultBrightness){
            cssFilters += 'brightness(' + this.brightness/100 + ') ';
        }

        if(this.contrast !== defaultContrast){
            cssFilters += 'contrast(' + this.contrast/100 + ') ';
        }

        if(this.hueRotate !== defaultHueRotate){
            cssFilters += 'hue-rotate(' + this.hueRotate + 'deg) ';
        }

        if(this.invert !== defaultInvert){
            cssFilters += 'invert(' + this.invert/100 + ') ';
        }

        if(this.saturate !== defaultSaturate){
            cssFilters += 'saturate(' + this.saturate/100 + ') ';
        }

        if(this.sepia !== defaultSepia){
            cssFilters += 'sepia(' + this.sepia/100 + ') ';
        }

        cssFilters = cssFilters.substring(0, cssFilters.length-1);

        return cssFilters;
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

    toggleExtraOptions(){
        this.showExtraOptions = !this.showExtraOptions;
    }


}