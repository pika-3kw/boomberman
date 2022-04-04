import { Component, Input, OnInit } from '@angular/core';

import { BLOCK_SIZE } from '../../constants/game';

export interface IWallPos {
  x: number;
  y: number;
}

export interface IWall {
  pos: IWallPos;
}

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

  constructor() {}

  ngOnInit(): void {}
}
