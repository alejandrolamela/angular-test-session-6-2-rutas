import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
messageList: string[];

  constructor() { 
    this.messageList = ['Hola pepeito'];
  }

  getMessages(){
    return this.messageList;
  }

  postMessage(message: string){
    this.messageList.push(message);
  }
}
