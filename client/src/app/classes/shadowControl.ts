export class ShadowControl {

    private showShadow: boolean;
    private xValue: number;
    private yValue: number;
    private blurValue: number;
    private color: string;

    constructor(){
        this.showShadow = false;
        this.xValue = 3;
        this.yValue = 3;
        this.blurValue = 3;
        this.color = '#000';
    }

    getShadowCss(){
        let cssProperty;

        if(this.showShadow){
            cssProperty = this.xValue + 'px ' + this.yValue + 'px ' + this.blurValue + 'px ' + this.color;
        }else if(!this.showShadow){
            cssProperty = 'none';
        }
        return cssProperty;
    }

    getShadowProperty(propertyName){
        return this[propertyName];
    }

    setShadowProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }
}