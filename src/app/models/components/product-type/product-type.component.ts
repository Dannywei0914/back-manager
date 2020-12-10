import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
  @Output() popupButton = new EventEmitter<boolean>();
  @Output() editValue = new EventEmitter<object>();
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

  emitButton(agreed: boolean) {
    this.popupButton.emit(agreed);
  }

  emitEditValue(agreed: boolean, item: object) {
    this.popupButton.emit(agreed);
    this.editValue.emit(item);
  }
}
