import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  template: ` <p>one works!</p> `,
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(`${new Date()} ngOnInit for OneComponent`);
  }
}
