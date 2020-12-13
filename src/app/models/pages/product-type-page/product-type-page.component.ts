import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { ComponentsService } from '../../components.service';

@Component({
  selector: 'app-product-type-page',
  templateUrl: './product-type-page.component.html',
  styleUrls: ['./product-type-page.component.scss']
})
export class ProductTypePageComponent implements OnInit {
  typeArray = [];

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
    this.api.get('http://localhost:3000/productType').subscribe(res => {
      this.typeArray = res;
      this.componentsService.isTypeLoading = false;
    })
  }
}
