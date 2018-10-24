import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor() { }

  message: string = "";
  showDialog: boolean = false;
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

}
