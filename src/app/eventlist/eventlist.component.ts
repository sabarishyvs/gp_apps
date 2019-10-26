import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  events: Event[]; 

  constructor() {
    this.events = [ 
      new Event("comedy show",	"Show"	,"Las Vegas"	,"22/11/2019"),
      new Event("Cycling Riders",	"Sports"	,"Las Vegas"	,"21/11/2019"),
      new Event("Casino Player",	"Game"	,"Las Vegas"	,"23/11/2019"),
    ];
  }

  /*toggle(joke) {
    joke.hide = !joke.hide;
  }*/

  addEvent(event: any) {
    this.events.unshift(event);
  }

  ngOnInit() {
  }

}
