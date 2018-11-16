import { Injectable, ViewChild, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  @ViewChild('toastContainer') toastContainer: ElementRef<any>;

  constructor() { }

  message: string = "";
  showDialog: boolean = false;
  showToast: boolean = false;
  callback: Function;
  type: String = 'success'|| 'danger';

  alert(message:string, type:string, callback?:Function){
    this.message = message;
    this.showDialog = true;
    this.type = type;

    if(callback){
      this.callback = callback;
    } if (!callback) {
      this.callback = null;
    }
  }

  ok(){
    if (this.callback) {
      this.callback();
    }
    this.close();
  }

  close(){
    this.showDialog = false;
  }

  toast(message: string){
    this.message = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 1250)
  }

 

}
