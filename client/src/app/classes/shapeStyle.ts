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
