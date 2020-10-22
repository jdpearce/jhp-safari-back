import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { enterPage, getShowMessage, TestPartialState } from '../state';

@Component({
  selector: 'app-one',
  template: `<p>{{ text }}</p>
    <p *ngIf="showMessage$ | async">Hidden Message!</p>`,
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  text: string;
  showMessage$ = this.store.pipe(select(getShowMessage));

  constructor(private store: Store<TestPartialState>) {}

  ngOnInit(): void {
    this.text = `${new Date()} ngOnInit for OneComponent`;
    this.store.dispatch(enterPage());
  }
}
