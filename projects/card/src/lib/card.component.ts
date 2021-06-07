import { HighContrastModeDetector } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card',
  template: `
  <mat-form-field appearance="outline">
    <mat-label>{{output}}</mat-label>
    <input matInput [placeholder]="placeholder">
    <mat-icon matSuffix>{{suffix_text}}</mat-icon>
    <mat-hint>{{hint}}</mat-hint>
  </mat-form-field>

  `,
  styles: [],
})
export class CardComponent implements OnInit {
  value:any;
  @Input() placeholder:string="placeholder";
  @Input() suffix_text:string="home";
  @Input() hint: string="hint";
  @Input() output:string= "output";
  constructor() {}

  ngOnInit(): void {}
}
