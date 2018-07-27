import { Slide } from "./slide";

export class SlideObject{

    private static slideObjectCounter:number = 0;
    private id: number;
    private top: number; // Save as percentage
    private left: number; // Save as percentage
    private xTranslation: number; // Save as percentage
    private yTranslation: number; // Save as percentage
    private height: number; // Save as percentage
    private width: number; // Save as percentage
    private zIndex: number;

    constructor () {
        this.id = SlideObject.slideObjectCounter++;
        this.top = 0;
        this.left = 0;
        this.xTranslation = 0;
        this.yTranslation = 0;
        this.height = 0.1;
        this.width = 0.2;
        this.zIndex = 100;
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

        let slideRenderHeight = document.querySelector('.slide-render').clientHeight;
        let slideRenderWidth = document.querySelector('.slide-render').clientWidth;

        // Convert to percentages and save
        this.height = newHeightPixels/slideRenderHeight;
        this.width = newWidthPixels/slideRenderWidth;
        this.top = newTopPixels/slideRenderHeight;
        this.left = newLeftPixels/slideRenderWidth;
    }


    // This is used with ngDraggable.  It emits an event onMoveEnd
    setTranslation(event){
        // How much it moved in raw pixels
        let xTranslationPixels = event.x; 
        let yTranslationPixels = event.y;
        let slideRenderHeight = document.querySelector('.slide-render').clientHeight;
        let slideRenderWidth = document.querySelector('.slide-render').clientWidth;

        // Convert to percentages and save
        this.xTranslation = xTranslationPixels/slideRenderWidth;
        this.yTranslation = yTranslationPixels/slideRenderHeight;
    }

    getTranslation(){
        // Return translation in pixels according to current slide render size
        let slideRenderHeight = document.querySelector('.slide-render').clientHeight;
        let slideRenderWidth = document.querySelector('.slide-render').clientWidth; 

        // Convert percentages to pixels
        let xPixels = this.xTranslation * slideRenderWidth;
        let yPixels = this.yTranslation * slideRenderHeight;

        let translation = {
            x : xPixels,
            y: yPixels
        }

        return translation;
    }

    getCss(){
        let slideRenderHeight = document.querySelector('.slide-render').clientHeight;
        let slideRenderWidth = document.querySelector('.slide-render').clientWidth; 

        let css = {
            'height' : this.height * slideRenderHeight,
            'width' : this.width * slideRenderWidth,
            'top' : this.top * slideRenderHeight,
            'left' : this.left * slideRenderWidth,
            'z-index' : this.zIndex,
            'position' : 'absolute'
        }

        return css;
    }

    getSlideObjectProperty(propertyName){
        return this[propertyName];
    }

    setSlideObjectProperty(propertyName, propertyValue){
        this[propertyName] = propertyValue;
    }
}