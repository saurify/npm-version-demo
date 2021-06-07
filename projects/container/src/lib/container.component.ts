import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-container',
  template: `
    <div
      style="display:flex; flex-flow: row wrap; justify-content:space-evenly"
    >
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      <lib-card style="margin-bottom: 15px; padding-botton: 15px"></lib-card>
      </div>
  `,
  styles: [],
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
