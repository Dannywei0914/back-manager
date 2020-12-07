import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditProductTypeComponent } from './add-or-edit-product-type.component';

describe('AddOrEditProductTypeComponent', () => {
  let component: AddOrEditProductTypeComponent;
  let fixture: ComponentFixture<AddOrEditProductTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditProductTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
