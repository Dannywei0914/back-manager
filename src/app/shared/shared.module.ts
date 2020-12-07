import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    HeadComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MaterialModule
  ],
  exports: [
    HeadComponent,
    BarChartComponent,
    DoughnutChartComponent,
    MaterialModule
  ]
})
export class SharedModule { }
