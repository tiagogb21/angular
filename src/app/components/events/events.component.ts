import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  show: boolean = true;

  constructor() {}

  showMessage() {
    this.show = !this.show;
  }

  ngOnInit(): void {}
}
