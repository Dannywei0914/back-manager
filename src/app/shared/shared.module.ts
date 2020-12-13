import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from './material/material.module';
import { MessagePopupComponent } from './message-popup/message-popup.component';



@NgModule({
  declarations: [
    HeadComponent,
    BarChartComponent,
    DoughnutChartComponent,
    MessagePopupComponent
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
    MaterialModule,
    MessagePopupComponent
  ]
})
export class SharedModule { }
