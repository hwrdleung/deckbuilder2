export class ShapeStyle {

    static shapeStyleCounter: number = 0;
    name: string;
    id: number;
    isDefault: boolean;
    type: 'ShapeStyle';

    constructor(){
        this.isDefault = false;
        this.id = ShapeStyle.shapeStyleCounter++;
        this.type = 'ShapeStyle';
        this.name = 'ShapeStyle' + this.id;
    }

}