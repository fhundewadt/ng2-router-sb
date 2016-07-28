import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { Product } from "../shared/product";
import { ProductService } from "../shared/product.service";
import { DialogService } from "../../shared/dialog.service";

@Component({
  moduleId: module.id,
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product:Product;
  editTxt:string;
  private sub:any;

  constructor(private productService:ProductService,
              private router:Router,
              private route:ActivatedRoute,
              private dialogService:DialogService) {
  }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        let rowNumber = +params['rowNumber'];
        this.productService.getProduct(rowNumber)
          .then(product=> {
            if (product) {
              this.editTxt = product.txt;
              this.product = product;
            } else {
              this.gotoProducts();
            }
          })
      })
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  cancel() {
    this.gotoProducts();
  }

  save() {
    this.product.txt = this.editTxt;
    this.gotoProducts();
  }

  canDeactivate():Observable<boolean> | boolean {
    if (!this.product || this.product.txt === this.editTxt) {
      return true;
    }

    let p = this.dialogService.confirm('Discard changes?');
    let o = Observable.fromPromise(p);
    return o;
  }

  gotoProducts() {
    let rowNumber = this.product ? this.product.rowNumber : null;
    // Add a totally useless `foo` parameter for kicks.
    // Absolute link
    let link = ['/products', {rowNumber: rowNumber, foo: 'foo'}];
    this.router.navigate(link);
  }
}
