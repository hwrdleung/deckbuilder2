export class ShapeStyle {

    private static shapeStyleCounter: number = 0;
    private name: string;
    private id: number;
    private editNameMode: boolean;

    constructor () {
        this.id = ShapeStyle.shapeStyleCounter++;
        this.name = 'ShapeStyle' + ShapeStyle.shapeStyleCounter;
        this.editNameMode = false;
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
}