import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductListComponent } from './new-product-list.component';

describe('NewProductListComponent', () => {
  let component: NewProductListComponent;
  let fixture: ComponentFixture<NewProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
