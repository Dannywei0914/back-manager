import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypePageComponent } from './product-type-page.component';

describe('ProductTypePageComponent', () => {
  let component: ProductTypePageComponent;
  let fixture: ComponentFixture<ProductTypePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
