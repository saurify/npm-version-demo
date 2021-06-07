import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-container',
  template: `
    <div
      style="display:block"
    >
      <lib-card suffix_text="htexttt" (output)="acceptdata($event)" label="random label"></lib-card>

      </div>
      <div style="display:block">
      {{data}}
      </div>
  `,
  styles: [],
})
export class ContainerComponent implements OnInit {
  data:string;
  constructor() {}

  ngOnInit(): void {}
  acceptdata(data:any){
    this.data = data
  }
}
