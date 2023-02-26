import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
  

  events:any = [];
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents() {
    this.eventService.getEvents().subscribe({
      next: data => {
        this.events = data;
        console.log(this.events);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  

}
