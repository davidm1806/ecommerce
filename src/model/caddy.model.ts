import {ItemProduct} from './item.model';
import {Custumer} from './custumer.model';
import { Product } from './product.model';
export class Caddy {
  public name;
 // public items: Map<number, ItemProduct> = new Map<number, ItemProduct>();
  public item: ItemProduct[];
  public client: Custumer;
  public product: Product;
  constructor() {
      this.item = new Array();
        this.name = name;
    }

}
