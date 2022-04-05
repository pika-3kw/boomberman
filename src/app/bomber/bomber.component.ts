import { Component, Input, OnInit } from '@angular/core';
import { getStylePos } from '../../helpers/styles';

export interface IBomberPos {
  x: number;
  y: number;
}

export interface IBomber {
  pos: IBomberPos;
  run(): void;
}

@Component({
  selector: 'app-bomber',
  templateUrl: './bomber.component.html',
  styleUrls: ['./bomber.component.scss'],
})
export class BomberComponent implements OnInit {
  @Input() pos: IBomberPos = { x: 0, y: 0 };

  constructor() {}

  ngOnInit(): void {}

  stylePosition() {
    return getStylePos(this.pos);
  }
}
