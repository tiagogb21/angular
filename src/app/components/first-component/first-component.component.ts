import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Tiago';
  year: number = 2022;
  age: number = 35;

  Movies: any[] = [
    {
      name: 'Avengers: Endgame',
    },
    {
      name: 'Good Boys',
    },
    {
      name: 'Playmobil: The Movie',
    },
    {
      name: 'Aquarela',
    },
    {
      name: 'Aladdin',
    },
    {
      name: 'Downton Abbey',
    },
  ];

  data = [{ property: 'a' }, { property: 'b' }, { property: 'c' }];

  get properties() {
    return this.data.map((o) => o.property);
  }

  constructor() {}

  ngOnInit(): void {}
}
