export class HorizontalResizer {

    containerElement:HTMLElement;
    resizerElement:HTMLElement;
    lowerBoundElement:HTMLElement;

    constructor(containerElement, resizerElement, lowerBoundElement){
        this.containerElement = containerElement;
        this.resizerElement = resizerElement;
        this.lowerBoundElement = lowerBoundElement;
    }


    init() {
        let startResize = () => { 
          document.addEventListener('mousemove', this.resizeGrid);
          document.addEventListener('mouseup', stopResize);
        }
    
        let stopResize = () => {
          document.removeEventListener('mousemove', this.resizeGrid);
          document.removeEventListener('mouseup', stopResize);
        }
    
        if (this.resizerElement) {
          // Resizer is rendered based on *ngIf condition
          // Wrapping in an IF statement prevents the following line
          // from running before the resizer has rendered.
          this.resizerElement.addEventListener('mousedown', startResize);
        }
      }
    
      resizeGrid = (e) => {    
        let viewportHeight = document.documentElement.offsetHeight;
        let offset = viewportHeight - this.containerElement.offsetHeight;
    
        let topHeight = e.pageY - offset - this.resizerElement.offsetHeight / 2;
        let bottomHeight = viewportHeight - e.pageY - this.resizerElement.offsetHeight / 2;
    
        this.containerElement.style.gridTemplateRows = topHeight + 'fr ' + this.resizerElement.offsetHeight + 'px ' + bottomHeight + 'fr';
      
        // Upper boundary 
        if(e.pageY < offset + this.resizerElement.offsetHeight / 2){
          this.containerElement.style.gridTemplateRows = '0px ' + this.resizerElement.offsetHeight + 'px ' + '1fr';
        }
    
        // Lower boundary
        if(e.pageY >= viewportHeight - this.resizerElement.offsetHeight/2 -  this.lowerBoundElement.offsetHeight){
          this.containerElement.style.gridTemplateRows = '1fr ' + this.resizerElement.offsetHeight + 'px ' + this.lowerBoundElement.offsetHeight + 'px';
        }
      }

}