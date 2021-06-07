import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [CardComponent],
  imports: [
    MatCardModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
