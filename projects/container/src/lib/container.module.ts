import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';

import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms'
import { CardModule } from 'card-mtx';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CardModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
