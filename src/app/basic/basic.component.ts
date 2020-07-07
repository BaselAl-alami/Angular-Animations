import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  switchstate = 'original';
  constructor() { }

  ngOnInit(): void {
  }

  setState(state: string) {
    this.switchstate = state;
    console.log(state);
  }

}
