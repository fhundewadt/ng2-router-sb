/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { isNumber } from "@angular/compiler/esm/src/facade/lang";

import { Product } from './product';

var product:Product;


describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(1, '01,1010', 'Super Product')).toBeTruthy();
  });

  it('has mockItemNumber', () => {
    let product = {rowNumber: 1, itemNumber: '01,1010', txt: 'Super Product'};
    expect(product.itemNumber).toEqual('01,1010');
  });

  it('has mockRowNumber', () => {
    let product = {rowNumber: 1, itemNumber: '01,1010', txt: 'Super Product'};
    expect(product.rowNumber).toEqual(1);
  });

  it('has mockTxt', () => {
    let product = {rowNumber: 1, itemNumber: '01,1010', txt: 'Super Product'};
    expect(product.txt).toEqual('Super Product');
  })
});
