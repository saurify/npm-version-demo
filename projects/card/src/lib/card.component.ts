import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card',
  template: `
    <mat-card class="example-card" style="max-width:400px;">
      <mat-card-header>
        <div
          mat-card-avatar
          class="example-header-image"
          style="background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
    background-size: cover;"
        ></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img
        mat-card-image
        src="https://material.angular.io/assets/img/examples/shiba2.jpg"
        alt="Photo of a Shiba Inu"
      />
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz
          breeds of dog from Japan. A small, agile dog that copes very well with
          mountainous terrain, the Shiba Inu was originally bred for hunting.
        </p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
