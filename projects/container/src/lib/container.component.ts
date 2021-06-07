import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-container',
  template: `
    <div
      style="display:block"
    >
      <lib-card suffix_text="htexttt" output="random label"></lib-card>

      </div>
  `,
  styles: [],
})
export class ContainerComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
