import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { CardModule} from 'card-mtx'
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CardModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [ContainerComponent]
})
export class ContainerModule { }
