import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './models/pages/home-page/home-page.component';
import { ProductListPageComponent } from './models/pages/product-list-page/product-list-page.component';
import { ProductTypePageComponent } from './models/pages/product-type-page/product-type-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'productType', component: ProductTypePageComponent },
  { path: 'productList', component: ProductListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
