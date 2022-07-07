import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent implements OnInit {
  constructor() {}

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  handleClick() {
    this.changeNumber.emit();
  }
}
