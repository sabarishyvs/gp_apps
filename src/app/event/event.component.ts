import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Event } from '../event';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  /*setup: string;
  punchline: string;*/
  @Input('event') data: Event;
  isUser;
  /*constructor() {
    /*this.setup = "What did the cheese say when it looked in the mirror?";
    this.punchline = "Halloumi (Hello Me)";
  }*/

  ngOnInit() {
    console.log("isUser::" + Event.isUser);
    this.isUser = Event.isUser;
  }

}
