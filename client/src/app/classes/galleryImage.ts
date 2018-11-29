
export class GalleryImage {

    url: string;
    id: number;
    fileName: string;

    constructor(){
        this.url = "";
        this.id = 0;
        this.fileName = '';
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    getProperty(propertyName) {
        return this[propertyName];
    }

    setProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
    }
}