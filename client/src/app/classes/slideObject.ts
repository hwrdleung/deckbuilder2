import { Slide } from "./slide";

export class SlideObject{

    private static slideObjectCounter:number = 0;
    private id: number;
    private name: string;
    private editNameMode: boolean;
    private top: number; // Save as percentage
    private left: number; // Save as percentage
    private xTranslation: number; // Save as percentage
    private yTranslation: number; // Save as percentage
    private rotation: number;
    private height: number; // Save as percentage
    private width: number; // Save as percentage
    private display: boolean;
    private zIndex: number;

    constructor () {
        this.id = SlideObject.slideObjectCounter++;
        this.name = 'SlideObject' + this.id;
        this.top = 0;
        this.left = 0;
        this.xTranslation = 0;
        this.yTranslation = 0;
        this.rotation = 0;
        this.height = 75;
        this.width = 200;
        this.display = true;
        this.zIndex = 100;
    }

    toggleEditNameMode(){
        this.editNameMode = !this.editNameMode;
    }

    setZIndex(zIndex){
        this.zIndex = zIndex;
    }

    // (rzStop) emits an event
    setSize(event){
        // New sizes in raw pixels 
        let newHeightPixels = event.size.height;
        let newWidthPixels = event.size.width;
        let newTopPixels = event.position.top;
        let newLeftPixels = event.position.left;

        // // Convert to percentages and save
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
        let slideRenderHeight = document.querySelector('.slide-render').clientHeight;
        let slideRenderWidth = document.querySelector('.slide-render').clientWidth; 

        let css = {
            'height' : this.height + 'px',
            'width' : this.width + 'px',
            'top' : this.top + 'px',
            'left' : this.left + 'px',
            'z-index' : this.zIndex,
            'display' : this.display ? 'block' : 'none',
            'transform' : 'rotate(' + this.rotation + 'deg)',
            'position' : 'absolute'
        }
        return css;
    }

    toggleSlideObjectProperty(propertyName:string){
        this[propertyName] = !this[propertyName];
    }

    getSlideObjectProperty(propertyName){
        return this[propertyName];
    }

    setSlideObjectProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }
}