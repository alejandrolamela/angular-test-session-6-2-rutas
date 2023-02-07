import { MessagesService } from './../../services/messages.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {

  constructor(private messageService: MessagesService){

  }

  addMessage(message:string){

    this.messageService.postMessage(message);

  }

}
