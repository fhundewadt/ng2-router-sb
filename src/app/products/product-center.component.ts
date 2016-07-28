import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { ProductService } from "./shared/product.service";

@Component({
  moduleId: module.id,
  selector: 'app-product-center',
  templateUrl: 'product-center.component.html',
  styleUrls: ['product-center.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService]
})
export class ProductCenterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
