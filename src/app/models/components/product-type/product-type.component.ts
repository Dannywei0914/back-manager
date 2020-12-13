import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { ComponentsService } from '../../components.service';

interface typeObj {
  id: number,
  name: string
}

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
  @Input() typeArray = [];
  @Output() emitMsg =  new EventEmitter<boolean>();

  typeObj: typeObj = {
    id: null,
    name: ''
  };

  isMsgPopup = false;
  popupOpen = false;
  popupTitle = '';
  delTypeId = null;

  constructor(
    private api: ApiService,
    public componentsService: ComponentsService
  ) { }

  ngOnInit(): void {

  }

  openAddPopup() {
    this.popupOpen = true;
    this.popupTitle = '新增類別';
  }

  openEditPopup(type: typeObj) {
    this.popupOpen = true;
    this.popupTitle = '修改類別';
    this.typeObj = JSON.parse(JSON.stringify(type));
  }

  closePopup() {
    this.initStatus();
  }

  setTypeName(e: any) {
    this.typeObj.name = e.target.value;
  }

  addType(type: typeObj) {
    this.api.post('http://localhost:3000/productType', type).subscribe(res => {
      this.initStatus();
    });
  }

  editType(id:number, type: typeObj) {
    this.api.put(`http://localhost:3000/productType/${id}`, type).subscribe(res => {
      this.initStatus();
    });
  }

  openDeletePopup(id: number) {
    this.isMsgPopup = true;
    this.delTypeId = id;
  }

  deleteType(id: number) {
    this.api.delete(`http://localhost:3000/productType/${id}`).subscribe(res => {
      this.initStatus();
    });
  }

  send(type: typeObj) {
    if (type.id === null) {
      this.addType(type)
    } else {
      this.editType(type.id, type)
    }
  }

  initStatus() {
    this.typeObj = {
      id: null,
      name: ''
    };
    this.delTypeId = null;
    this.popupOpen = false;
    this.isMsgPopup = false;
    this.emitMsg.emit(true);
  }

  onGetMsg(msg: boolean) {
    if (msg) {
      this.deleteType(this.delTypeId);
    } else {
      this.isMsgPopup = false;
    }
  }
}
