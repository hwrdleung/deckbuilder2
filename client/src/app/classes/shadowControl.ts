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

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
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