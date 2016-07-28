import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Product } from "../shared/product";
import { ProductService } from "../shared/product.service";

@Component({
  moduleId: module.id,
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products:Product[];

  private selectedRowNumber:number;
  private sub:any;

  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
  }

  isSelected(product:Product) {
    return product.rowNumber === this.selectedRowNumber;
  }

  ngOnInit() {
    this.sub = this.activatedRoute
      .params
      .subscribe(params => {
        this.selectedRowNumber = +params['rowNumber'];
        this.productService.getProducts()
          .then(products => this.products = products);
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSelect(product:Product) {
    console.log('onSelect -> ' + product.rowNumber);
    this.router.navigate(['/products', product.rowNumber]);
  }
}
