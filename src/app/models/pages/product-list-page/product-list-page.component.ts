import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { ComponentsService } from '../../components.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  productData = [];
  typeList = [];

  constructor(
    private api: ApiService,
    private componentsService: ComponentsService
  ) { }

  ngOnInit(): void {
    this.getInitData();
  }

  onMsg(type: boolean) {
    if (type) {
      this.getInitData();
    }
  }

  getInitData() {
    this.componentsService.isTypeLoading = true;
    this.api.get('http://localhost:3000/productList').subscribe(res => {
      this.productData = res;
      this.componentsService.isTypeLoading = false;
    })

    this.componentsService.isTypeLoading = true;
    this.api.get('http://localhost:3000/productType').subscribe(res => {
      this.typeList = res;
    })
  }

}
