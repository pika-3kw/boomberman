import { Component, Input, OnInit } from '@angular/core';

import { getStylePos } from '../../helpers/styles';
import { IWallPos, Wall } from './wall.model';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],
})
export class WallComponent implements OnInit {
  @Input() pos: IWallPos = {
    x: 0,
    y: 0,
  };

  wall: Wall | undefined;

  constructor() {}

  ngOnInit(): void {}

  stylePosition() {
    return getStylePos(this.pos);
  }
}
