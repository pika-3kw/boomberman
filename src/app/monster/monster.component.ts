import { Component, OnInit } from '@angular/core';

export interface IMonster {
  pos: {
    x: number;
    y: number;
  };
}

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
})
export class MonsterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
