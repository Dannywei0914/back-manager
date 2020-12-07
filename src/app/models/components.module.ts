import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { ProductTypePageComponent } from './pages/product-type-page/product-type-page.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { AddOrEditProductTypeComponent } from './components/add-or-edit-product-type/add-or-edit-product-type.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    ProductTypePageComponent,
    ProductTypeComponent,
    AddOrEditProductTypeComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class ComponentsModule { }
