import { Component, OnInit, Input } from '@angular/core';
import { getStylePos } from '../../helpers/styles';
import { IWallPos } from '../wall/wall.model';

@Component({
  selector: 'app-soft-wall',
  templateUrl: './soft-wall.component.html',
  styleUrls: ['./soft-wall.component.scss'],
})
export class SoftWallComponent implements OnInit {
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
