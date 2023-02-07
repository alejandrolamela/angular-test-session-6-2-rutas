import { MessagesService } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit{
listado! : string[];
  constructor(private messageService: MessagesService){

  }


  ngOnInit(): void {
    this.listado = [...this.messageService.getMessages()];
  }
  

}
