import { Component, OnInit, Input } from '@angular/core';
import { getStylePos } from '../../helpers/styles';
import { IWallPos } from '../wall/wall.model';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent implements OnInit {
  @Input() pos: IWallPos = {
    x: 0,
    y: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  stylePosition() {
    return getStylePos(this.pos);
  }
}
