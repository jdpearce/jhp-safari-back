import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  template: `<p>{{ text }}</p>`,
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  text: string;

  ngOnInit(): void {
    this.text = `${new Date()} ngOnInit for TwoComponent`;
  }
}
