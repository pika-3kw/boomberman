import { Component, Input, OnInit } from '@angular/core';

import { getStylePos } from '../../helpers/styles';
import { IWallPos, WallType, Wall } from './wall.model';

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
  @Input() type: WallType = 'hard';

  wall: Wall | undefined;

  constructor() {}

  ngOnInit(): void {}

  stylePosition() {
    return getStylePos(this.pos);
  }

  getClasses(): string {
    return this.type === 'hard' ? 'wall' : 'soft-wall';
  }
}
