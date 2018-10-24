export class BorderControl{
    private showFullBorder: boolean;
    private showTopBorder: boolean;
    private showRightBorder: boolean;
    private showBottomBorder: boolean;
    private showLeftBorder: boolean;

    // Full border settings
    private fullBorderWidth: number;
    private fullBorderColor: string;
    private fullBorderStyle: string;

    // Top border settings
    private topBorderWidth: number;
    private topBorderColor: string;
    private topBorderStyle: string;

    // Bottom border settings
    private bottomBorderWidth: number;
    private bottomBorderColor: string;
    private bottomBorderStyle: string;

    // Right border settings
    private rightBorderWidth: number;
    private rightBorderColor: string;
    private rightBorderStyle: string;

    // Left border settings
    private leftBorderWidth: number;
    private leftBorderColor: string;
    private leftBorderStyle: string;

    // Radius settings
    private topLeftRadius: number;
    private topRightRadius: number;
    private bottomLeftRadius: number;
    private bottomRightRadius: number;

    constructor() {
        this.showFullBorder = false;
        this.showTopBorder = false;
        this.showRightBorder = false;
        this.showBottomBorder = false;
        this.showLeftBorder = false;
    
        // Full border settings
        this.fullBorderWidth = 1;
        this.fullBorderColor = '#000';
        this.fullBorderStyle = 'solid';
    
        // Top border settings
        this.topBorderWidth = 1;
        this.topBorderColor = '#000';
        this.topBorderStyle = 'solid';
    
        // Bottom border settings
        this.bottomBorderWidth = 1;
        this.bottomBorderColor = '#000';
        this.bottomBorderStyle = 'solid';
    
        // Right border settings
        this.rightBorderWidth = 1;
        this.rightBorderColor = '#000';
        this.rightBorderStyle = 'solid';
    
        // Left border settings
        this.leftBorderWidth = 1;
        this.leftBorderColor = '#000';
        this.leftBorderStyle = 'solid';

        // Radius settings
        this.topLeftRadius = 0;
        this.topRightRadius = 0;
        this.bottomLeftRadius = 0;
        this.bottomRightRadius = 0;
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    getFullBorderCss(){
        let cssProperty = this.fullBorderWidth + 'px ' + this.fullBorderColor + ' ' + this.fullBorderStyle;
        return cssProperty;
    }

    getTopBorderCss(){
        let cssProperty = this.topBorderWidth + 'px ' + this.topBorderColor + ' ' + this.topBorderStyle;
        return cssProperty;
    }

    getRightBorderCss(){
        let cssProperty = this.rightBorderWidth + 'px ' + this.rightBorderColor + ' ' + this.rightBorderStyle;
        return cssProperty;
    }

    getBottomBorderCss(){
        let cssProperty = this.bottomBorderWidth + 'px ' + this.bottomBorderColor + ' ' + this.bottomBorderStyle;
        return cssProperty;
    }

    getLeftBorderCss(){
        let cssProperty = this.leftBorderWidth + 'px ' + this.leftBorderColor + ' ' + this.leftBorderStyle;
        return cssProperty;
    }

    getBorderRadiusCss(){
        let borderRadiusCss = '';

        borderRadiusCss += this.topLeftRadius + 'px ';
        borderRadiusCss += this.topRightRadius + 'px ';
        borderRadiusCss += this.bottomRightRadius + 'px ';
        borderRadiusCss += this.bottomLeftRadius + 'px';

        return borderRadiusCss;
    }

    getBorderProperty(propertyName) {
        return this[propertyName];
    }

    setBorderProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    }

    toggleBorderProperty(propertyName:string){
        this[propertyName] = !this[propertyName];
    }
}