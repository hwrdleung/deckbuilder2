export class SlideObject{

    static slideObjectCounter:number = 0;
    id: number;
    name: string;
    type: 'ImageObject' | 'TextObject';
    editNameMode: boolean;
    top: number; // Save as percentage
    left: number; // Save as percentage
    xTranslation: number; // Save as percentage
    yTranslation: number; // Save as percentage
    rotation: number;
    height:  string | number; // Save as percentage
    width: string | number; // Save as percentage
    display: boolean;
    zIndex: number;
    isResizing: boolean;
    isDragging: boolean;

    constructor () {
        this.id = SlideObject.slideObjectCounter++;
        this.name = 'SlideObject' + this.id;
        this.editNameMode = false;
        this.top = 0;
        this.left = 0;
        this.xTranslation = 0;
        this.yTranslation = 0;
        this.height = 'auto';
        this.width = 'auto';
        this.display = true;
        this.zIndex = 100;
        this.isResizing = false;
        this.isDragging = false;
    }

    revive(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }

    // (rzStop) emits an event
    setSize(event){
        // New sizes in raw pixels 
        let newHeightPixels = event.size.height;
        let newWidthPixels = event.size.width;
        let newTopPixels = event.position.top;
        let newLeftPixels = event.position.left;

        // Convert to percentages and save
        this.height = newHeightPixels;
        this.width = newWidthPixels;
        this.top = newTopPixels;
        this.left = newLeftPixels;
    }


    // This is formatted to be used with ngDraggable.
    setTranslation(event){
        this.xTranslation = event.x;
        this.yTranslation = event.y;
    }

    getTranslation(){
        let translation = {
            x: this.xTranslation,
            y: this.yTranslation
        }
        return translation;
    }

    getCss(){
        let css = {
            'height': this.height + 'px',
            'width':this.width + 'px',
            'top' : this.top + 'px',
            'left' : this.left + 'px',
            'z-index' : this.zIndex,
            'display' : this.display ? 'block' : 'none',
            'position' : 'absolute',
            'box-sizing': 'content-box'
        }

        if(this.isResizing || this.isDragging) {
            css['border'] = '2px gray dashed';
            css['background'] = 'rgba(0, 0, 0, 0.3)';
            css['margin-top'] = '-2px';
            css['margin-left'] = '-2px';
        }

        return css;
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