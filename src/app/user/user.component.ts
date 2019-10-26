import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  events: Event[]; 
  

  constructor() {
    this.events = [ 
      

      new Event("comedy show",	"Show"	,"Las Vegas"	,"22/11/2019"),
      new Event("Cycling Riders",	"Sports"	,"Las Vegas"	,"21/11/2019"),
      new Event("Casino Player",	"Game"	,"Las Vegas"	,"23/11/2019"),
    ];

  }


  ngOnInit() {
    Event.isUser=true 
  }

}
