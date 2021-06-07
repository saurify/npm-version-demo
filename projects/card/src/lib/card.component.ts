import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'lib-card',
  template: `
  <mat-form-field appearance="outline" style="width:40vw;">
    <mat-label>{{label}}</mat-label>
    <input matInput [placeholder]="placeholder" [formcontrol]='value'>
    <mat-icon matSuffix>{{suffix_text}}</mat-icon>
    <mat-hint>{{hint}}</mat-hint>
  </mat-form-field>

  `,
  styles: [],
})
export class CardComponent implements OnInit {
  @Input() placeholder:string="placeholder";
  @Input() suffix_text:string="home";
  @Input() hint: string="hint";
  @Input() label:string= "label";
  @Output() output = new EventEmitter<string>();
  value:FormControl= new FormControl('')
  
  constructor() {}

  ngOnInit(): void {
    this.value.valueChanges.pipe(debounceTime(500)).subscribe((value) => this.output.emit(value));
  }
}
