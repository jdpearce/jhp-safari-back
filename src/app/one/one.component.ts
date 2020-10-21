import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  template: `<p>{{ text }}</p>`,
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  text: string;

  ngOnInit(): void {
    this.text = `${new Date()} ngOnInit for OneComponent`;
  }
}
