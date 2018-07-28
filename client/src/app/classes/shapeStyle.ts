export class ShapeStyle {

    private static shapeStyleCounter: number = 0;
    private name: string;
    private id: number;
    private editNameMode: boolean;
    private showExtraOptions: boolean;

    constructor () {
        this.id = ShapeStyle.shapeStyleCounter++;
        this.name = 'ShapeStyle' + ShapeStyle.shapeStyleCounter;
        this.editNameMode = false;
        this.showExtraOptions = false;
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
