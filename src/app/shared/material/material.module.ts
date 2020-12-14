import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrollingModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  exports: [
    ScrollingModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
