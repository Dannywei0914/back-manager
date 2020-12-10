import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 250, 500);
  }
}
@Component({
  selector: 'app-product-type-page',
  templateUrl: './product-type-page.component.html',
  styleUrls: ['./product-type-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy}]
})
export class ProductTypePageComponent implements OnInit {
  isPopupOpen = false;
  typeValue = {};

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onOpen(agreed: boolean) {
    agreed ? this.isPopupOpen = true : this.isPopupOpen = false;
  }

  onEditValue(item: object) {
    this.typeValue = JSON.parse(JSON.stringify(item));
  }

  onClose(close: boolean) {
    console.log(close);
    close ? this.isPopupOpen = false : this.isPopupOpen = true;
  }

}
