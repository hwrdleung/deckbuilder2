import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor() { }

  message: string = "";
  showDialog: boolean = false;
  callback: Function;

  alert(message:string, callback?:Function){
    console.log('test from dialog service')
    this.message = message;
    this.showDialog = true;

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

}
