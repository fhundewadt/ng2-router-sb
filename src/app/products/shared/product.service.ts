import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from '../mock-product';

let productsPromise = Promise.resolve(PRODUCTS);

@Injectable()
export class ProductService {

  static nextRowNumber = 100;

  getProducts() {
    console.log(PRODUCTS[0].rowNumber);
    return Promise.resolve(PRODUCTS);
  }

  getProduct(rowNumber:number | string) {
    return productsPromise
      .then(products => products.find(product => product.rowNumber === +rowNumber));
  }

  addProduct(itemNumber:string, txt:string) {
    itemNumber = itemNumber.trim();
    txt = txt.trim();

    if (txt && itemNumber) {
      let product = new Product(ProductService.nextRowNumber++, itemNumber, txt);
      productsPromise.then(products => products.push(product));
    }
  }

  constructor() {
  }

}
