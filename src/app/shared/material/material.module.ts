import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrollingModule,
    MatIconModule
  ],
  exports: [
    ScrollingModule,
    MatIconModule
  ]
})
export class MaterialModule { }
