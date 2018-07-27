
export class BorderControl {

    private showFullBorder: boolean;
    private showTopBorder: boolean;
    private showRightBrder: boolean;
    private showBottomBorder: boolean;
    private showLeftBorder: boolean;

    // Full border settings
    private fullBorderWidth: number;
    private fullBorderColor: string;
    private fullBorderStyle: string;
    private fullBorderRadius: number;

    // Top border settings
    private topBorderWidth: number;
    private topBorderColor: string;
    private topBorderStyle: string;
    private topBorderRadiusLeft: number;
    private topBorderRadiusRight: number;

    // Bottom border settings
    private bottomBorderWidth: number;
    private bottomBorderColor: string;
    private bottomBorderStyle: string;
    private bottomBorderRadiusLeft: number;
    private bottomBorderRadiusRight: number;

    // Right border settings
    private rightBorderWidth: number;
    private rightBorderColor: string;
    private rightBorderStyle: string;

    // Left border settings
    private leftBorderWidth: number;
    private leftBorderColor: string;
    private leftBorderStyle: string;

    // Radius settings
    private radius: number;
    private topLeftRadius: number;
    private topRightRadius: number;
    private bottomLeftRadius: number;
    private bottomRightRadius: number;

    constructor() {
        this.showFullBorder = false;
        this.showTopBorder = false;
        this.showRightBrder = false;
        this.showBottomBorder = false;
        this.showLeftBorder = false;
    
        // Full border settings
        this.fullBorderWidth = 1;
        this.fullBorderColor = '#000';
        this.fullBorderStyle = 'solid';
        this.fullBorderRadius = 0;
    
        // Top border settings
        this.topBorderWidth = 1;
        this.topBorderColor = '#000';
        this.topBorderStyle = 'solid';
        this.topBorderRadiusLeft = 0;
        this.topBorderRadiusRight = 0;
    
        // Bottom border settings
        this.bottomBorderWidth = 1;
        this.bottomBorderColor = '#000';
        this.bottomBorderStyle = 'solid';
        this.bottomBorderRadiusLeft = 0;
        this.bottomBorderRadiusRight = 0;
    
        // Right border settings
        this.rightBorderWidth = 1;
        this.rightBorderColor = '#000';
        this.rightBorderStyle = 'solid';
    
        // Left border settings
        this.leftBorderWidth = 1;
        this.leftBorderColor = '#000';
        this.leftBorderStyle = 'solid';

        // Radius settings
        this.radius = 0;
        this.topLeftRadius = 0;
        this.topRightRadius = 0;
        this.bottomLeftRadius = 0;
        this.bottomRightRadius = 0;
    }

    getFullBorderCss(){
        let cssProperty = this.fullBorderWidth + ' ' + this.fullBorderColor + ' ' + this.fullBorderStyle;
        return cssProperty;
    }

    getTopBorderCss(){
        let cssProperty = this.topBorderWidth + ' ' + this.topBorderColor + ' ' + this.topBorderStyle;
        return cssProperty;
    }

    getRightBorderCss(){
        let cssProperty = this.rightBorderWidth + ' ' + this.rightBorderColor + ' ' + this.rightBorderStyle;
        return cssProperty;
    }

    getBottomBorderCss(){
        let cssProperty = this.bottomBorderWidth + ' ' + this.bottomBorderColor + ' ' + this.bottomBorderStyle;
        return cssProperty;
    }

    getLeftBorderCss(){
        let cssProperty = this.leftBorderWidth + ' ' + this.leftBorderColor + ' ' + this.leftBorderStyle;
        return cssProperty;
    }

    getBorderProperty(propertyName) {
        return this[propertyName];
    }

    setBorderProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    }
}