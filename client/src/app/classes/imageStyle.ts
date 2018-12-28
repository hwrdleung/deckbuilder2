import { BorderControl } from "./borderControl";

/*   Only include style settings that would be supported by CamanJS   */

export class ImageStyle {

    static imageStyleCounter:number = 0;
    name: string;
    id: number;
    editNameMode: boolean;
    showExtraOptions: boolean;
    isDefault : Boolean;
    type: 'ImageStyle';

    // Borders
    border: BorderControl;

    // Filters

    brightness: number;
    contrast: number;
    exposure: number;
    gamma: number;
    greyscale: boolean;
    hue: number;
    invert: boolean;
    saturation: number;
    sepia: number;
    vibrance: number;
    padding: number;

    constructor () {
        this.id = ImageStyle.imageStyleCounter++;
        this.name = 'ImageStyle' + this.id;
        this.editNameMode = false;
        this.showExtraOptions = false;
        this.type = 'ImageStyle';

        this.brightness = 0;
        this.contrast = 0;
        this.exposure = 0;
        this.gamma = 1;
        this.greyscale = false;
        this.hue = 0;
        this.invert = false;
        this.saturation = 0;
        this.sepia = 0;
        this.vibrance = 0;

        this.border = new BorderControl();
        this.padding = 0;
        this.isDefault = false;
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }

        this.border = new BorderControl();
        this.border.revive(obj.border);
    }

    getCss(){
        let css = {
            'border-radius': this.border.getBorderRadiusCss(),
            // 'filter' : this.getFilters(),
            'padding' : this.padding + 'px',
            'box-sizing': 'border-box'
        }

        if (this.border.getProperty('showFullBorder')) {
            css['border'] = this.border.getFullBorderCss();
        } else if (!this.border.getProperty('showFullBorder')) {
            css['border-top'] = this.border.getProperty('showTopBorder') ? this.border.getTopBorderCss() : 'none';
            css['border-right'] = this.border.getProperty('showRightBorder') ? this.border.getRightBorderCss() : 'none';
            css['border-bottom'] = this.border.getProperty('showBottomBorder') ? this.border.getBottomBorderCss() : 'none';
            css['border-left'] = this.border.getProperty('showLeftBorder') ? this.border.getLeftBorderCss() : 'none';
        }

        return css;
    }

    // getFilters(){
    //     let cssFilters: string = "";

    //     // Default values:
    //     let defaultOpacity = 1;
    //     let defaultGrayscale = 0;
    //     let defaultBlur = 0;
    //     let defaultBrightness = 1;
    //     let defaultContrast = 1;

    //     let defaultHueRotate = 0;
    //     let defaultInvert = 0;
    //     let defaultSaturate = 1;
    //     let defaultSepia = 0;

    //     if(this.opacity !== defaultOpacity){
    //         cssFilters += 'opacity(' + this.opacity/100 + ') ';
    //     }

    //     if(this.grayscale !== defaultGrayscale){
    //         cssFilters += 'grayscale(' + this.grayscale/100 + ') ';
    //     }

    //     if(this.blur !== defaultBlur){
    //         cssFilters += 'blur(' + this.blur + 'px) ';
    //     }

    //     if(this.brightness !== defaultBrightness){
    //         cssFilters += 'brightness(' + this.brightness/100 + ') ';
    //     }

    //     if(this.contrast !== defaultContrast){
    //         cssFilters += 'contrast(' + this.contrast/100 + ') ';
    //     }

    //     if(this.hueRotate !== defaultHueRotate){
    //         cssFilters += 'hue-rotate(' + this.hueRotate + 'deg) ';
    //     }

    //     if(this.invert !== defaultInvert){
    //         cssFilters += 'invert(' + this.invert/100 + ') ';
    //     }

    //     if(this.saturate !== defaultSaturate){
    //         cssFilters += 'saturate(' + this.saturate/100 + ') ';
    //     }

    //     if(this.sepia !== defaultSepia){
    //         cssFilters += 'sepia(' + this.sepia/100 + ') ';
    //     }

    //     cssFilters = cssFilters.substring(0, cssFilters.length-1);

    //     return cssFilters;
    // }

    // Setter, getter, toggler
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