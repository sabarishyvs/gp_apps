import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter }  from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @Output() eventCreated = new EventEmitter<Event>();
  

  createEvent(name: string, category: string, location: string, date: string){
    this.eventCreated.emit(new Event(name , category,location,date));
  }

  constructor() { }

  ngOnInit() {
  }

}
