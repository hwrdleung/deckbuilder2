export class BorderControl{
    public showFullBorder: boolean;
    public showTopBorder: boolean;
    public showRightBorder: boolean;
    public showBottomBorder: boolean;
    public showLeftBorder: boolean;
    public borderStyles: Array<string>;

    // Full border settings
    public fullBorderWidth: number;
    public fullBorderColor: string;
    public fullBorderStyle: string;

    // Top border settings
    public topBorderWidth: number;
    public topBorderColor: string;
    public topBorderStyle: string;

    // Bottom border settings
    public bottomBorderWidth: number;
    public bottomBorderColor: string;
    public bottomBorderStyle: string;

    // Right border settings
    public rightBorderWidth: number;
    public rightBorderColor: string;
    public rightBorderStyle: string;

    // Left border settings
    public leftBorderWidth: number;
    public leftBorderColor: string;
    public leftBorderStyle: string;

    // Radius settings
    public topLeftRadius: number;
    public topRightRadius: number;
    public bottomLeftRadius: number;
    public bottomRightRadius: number;

    constructor() {
        this.showFullBorder = false;
        this.showTopBorder = false;
        this.showRightBorder = false;
        this.showBottomBorder = false;
        this.showLeftBorder = false;
        this.borderStyles = [
            "Solid",
            "Dashed",
            "Dotted",
            "Groove",
            "Double"
        ];
    
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

    // Getter, setter, toggler
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