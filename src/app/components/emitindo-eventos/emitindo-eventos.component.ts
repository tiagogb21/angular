import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitindo-eventos',
  templateUrl: './emitindo-eventos.component.html',
  styleUrls: ['./emitindo-eventos.component.css'],
})
export class EmitindoEventosComponent implements OnInit {
  myNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber() {
    this.myNumber = Math.round(Math.random() * 10);
  }
}
