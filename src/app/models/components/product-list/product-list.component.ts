import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from 'src/app/core/api.service';
import { ComponentsService } from '../../components.service';

interface productData {
  id: number,
  name: string,
  type: string,
  cost: number,
  unit: number,
  amount: number
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() productData = [];
  @Input() typeList = [];
  @Output() emitMsg =  new EventEmitter<boolean>();
  @ViewChild('paginator') paginator: MatPaginator;

  typeObj: productData = {
    id: null,
    name: '',
    type: '',
    cost: 0,
    unit: 0,
    amount: 0
  };

  constructor(
    private api: ApiService,
    public componentsService: ComponentsService
  ) { }

  ngOnInit(): void {
  }

}
