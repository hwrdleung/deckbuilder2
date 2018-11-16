export class DocumentSize {

    height: number;
    width: number;
    isCustom: boolean;
    jsPdfFormat: number[];
    jsPdfOrientation: 'landscape' | 'portrait';

    constructor(properties:any){
        this.height = properties.height;
        this.width = properties.width;
        this.isCustom = properties.isCustom;
        this.jsPdfFormat= properties.jsPdfFormat;
        this.jsPdfOrientation = properties.jsPdfOrientation;
    }
}