import {Custumer} from './custumer.model';
import {ItemProduct} from './Item.model';

export class Oder{
  public id: number;
  public custumer: Custumer ;
  public lineItems: Array<ItemProduct> = [];
  public totalPrice: number;
  public date: Date;
  constructor(){
    this.custumer= new Custumer();

  }
}
