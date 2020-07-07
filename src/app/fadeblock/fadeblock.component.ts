import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
} from '@angular/animations';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-fadeblock',
  templateUrl: './fadeblock.component.html',
  styleUrls: ['./fadeblock.component.scss'],
  animations: [
    trigger('changeState', [
      transition('void => *', [useAnimation(fadeAnimation)]),
    ]),
  ],
})
export class FadeblockComponent implements OnInit {

  currentState = 'origin';
  constructor() {}

  ngOnInit(): void {}
}
