import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  template: ` <p>two works!</p> `,
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(`${new Date()} ngOnInit for TwoComponent`);
  }
}
