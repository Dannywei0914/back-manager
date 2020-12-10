import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
interface typeValue {
  id: null;
  name: string;
}

@Component({
  selector: 'app-add-or-edit-product-type',
  templateUrl: './add-or-edit-product-type.component.html',
  styleUrls: ['./add-or-edit-product-type.component.scss']
})
export class AddOrEditProductTypeComponent implements OnInit {
  @Output() closeButton = new EventEmitter<boolean>();
  @Input() typeValue: typeValue;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    if (this.typeValue.name === undefined) {
      this.typeValue.name = '';
      this.typeValue.id = null;
    }
  }

  setTypeName(e: any) {
    this.typeValue.name = e.target.value;
  }

  emitButton(agreed: boolean, value) {
    console.log(value);
    this.postValue(value);
    this.closeButton.emit(agreed);
  }

  closePopup(agreed: boolean) {
    this.typeValue.id = null;
    this.typeValue.name = '';
    this.closeButton.emit(agreed);
  }

  postValue(value) {
    this.api.post('http://localhost:3000/data', value).subscribe(res => {
      console.log(res);
      this.typeValue.id = null;
      this.typeValue.name = '';
    });
  }
}
