import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
  pipeData$: Observable<any>;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    // this.getSubData();
    this.pipeData$ = this.api.get('http://localhost:3000/data').pipe(map(res => {
      return res.productType;
    }));
  }

  getSubData(): void {
    this.api.get('http://localhost:3000/data').subscribe(res => {
      console.log(res);
    });
  }
}
