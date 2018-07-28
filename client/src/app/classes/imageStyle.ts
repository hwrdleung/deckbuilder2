export class ImageStyle {

    private static imageStyleCounter:number = 0;
    private name: string;
    private id: number;
    private editNameMode: boolean;
    private showExtraOptions: boolean;

    // Borders
    private borderWidth: number;
    private borderStyle: string;
    private borderColor: string;
    private borderRadius: number;

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

        this.borderWidth = 0;
        this.borderStyle = 'none';
        this.borderColor = 'transparent';
        this.borderRadius = 0;

        this.opacity = 1;
        this.grayscale = 0;
        this.blur = 0;
        this.brightness = 1;
        this.contrast = 1;
        this.dropShadow = {
            'h-shadow': 0,
            'v-shadow': 0,
            'blur': 0,
            'spread': 0,
            'color':'transparent'
        }
        this.hueRotate = 0;
        this.invert = 0;
        this.saturate = 1;
        this.sepia = 0;
    }

    getCss(){
        let css = {
            'border-width' : this.borderWidth + 'px',
            'border-style' : this.borderStyle + 'px',
            'border-color': this.borderColor,
            'border-radius': this.borderRadius,
            'filter' : this.getFilters(),
        }

        return css;
    }

    getFilters(){
        let cssFilters: string;

        // Default values:
        let defaultOpacity = 1;
        let defaultGrayscale = 0;
        let defaultBlur = 0;
        let defaultBrightness = 1;
        let defaultContrast = 1;
        let defaultDropShadow = {
            'h-shadow': 0,
            'v-shadow': 0,
            'blur': 0,
            'spread': 0,
            'color':'transparent'
        }
        let defaultHueRotate = 0;
        let defaultInvert = 0;
        let defaultSaturate = 1;
        let defaultSepia = 0;

        if(this.opacity !== defaultOpacity){
            cssFilters += 'opacity(' + this.opacity + ') ';
        }

        if(this.grayscale !== defaultGrayscale){
            cssFilters += 'grayscale(' + this.grayscale + ') ';
        }

        if(this.blur !== defaultBlur){
            cssFilters += 'blur(' + this.blur + ') ';
        }

        if(this.brightness !== defaultBrightness){
            cssFilters += 'brightness(' + this.brightness + ') ';
        }

        if(this.contrast !== defaultContrast){
            cssFilters += 'contrast(' + this.contrast + ') ';
        }

        if(JSON.stringify(this.dropShadow) !== JSON.stringify(defaultDropShadow)){
            cssFilters += 'dropShadow(' + this.dropShadow + ') ';
        }

        if(this.hueRotate !== defaultHueRotate){
            cssFilters += 'hue-rotate(' + this.hueRotate + ') ';
        }

        if(this.invert !== defaultInvert){
            cssFilters += 'invert(' + this.invert + ') ';
        }

        if(this.saturate !== defaultSaturate){
            cssFilters += 'saturate(' + this.saturate + ') ';
        }

        if(this.sepia !== defaultSepia){
            cssFilters += 'sepia(' + this.sepia + ') ';
        }

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