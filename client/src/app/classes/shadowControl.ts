export class ShadowControl {

    private showShadow: boolean;
    private xValue: number;
    private yValue: number;
    private blurValue: number;
    private color: string;

    constructor(){
        this.showShadow = false;
        this.xValue = 0;
        this.yValue = 0;
        this.blurValue = 0;
        this.color = '#000';
    }

    getShadowCss(){
        let cssProperty = this.xValue + 'px ' + this.yValue + 'px ' + this.blurValue + 'px ' + this.color;
        return cssProperty;
    }

    getShadowProperty(propertyName){
        return this[propertyName];
    }

    setShadowProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }
}