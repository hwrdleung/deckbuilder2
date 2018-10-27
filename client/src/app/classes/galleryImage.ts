
export class GalleryImage {

    private url: string;
    private id: number;

    constructor(){
        this.url = "";
        this.id = 0;
    }

    getProperty(propertyName) {
        return this[propertyName];
    }

    setProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    }
}