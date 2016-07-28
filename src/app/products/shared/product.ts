export class Product {
  public rowNumber:number;
  public itemNumber:string;
  public txt:string;

  constructor(rowNumber:number, itemNumber:string, txt:string) {
    this.itemNumber = itemNumber;
    this.rowNumber = rowNumber;
    this.txt = txt;
  }
}
