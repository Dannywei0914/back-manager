import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { ProductTypePageComponent } from './pages/product-type-page/product-type-page.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    ProductTypePageComponent,
    ProductTypeComponent,
    ProductListPageComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    SharedModule,
    PerfectScrollbarModule
  ],
  exports: [
    HomePageComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ComponentsModule { }
