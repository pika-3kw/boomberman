import { Component, OnInit } from '@angular/core';

export interface IBomberPos {
  x: number;
  y: number;
}

export interface IBomber {
  pos: IBomberPos;
}

@Component({
  selector: 'app-bomber',
  templateUrl: './bomber.component.html',
  styleUrls: ['./bomber.component.scss'],
})
export class BomberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
