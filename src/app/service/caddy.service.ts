import { Injectable } from '@angular/core';
import { Caddy } from 'src/model/caddy.model';
import { Product } from 'src/model/product.model';
import { ItemProduct } from 'src/model/Item.model';
import index from '@angular/cli/lib/cli';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {
  currentCaddyName: string = "panier1";
  public caddies: Map<string, Caddy> = new Map();
  private sousTotal: Array<number> = new Array();
  public caddy: Caddy;
  public currentLigne: number;

  constructor() {
    const caddy = localStorage.getItem("caddy");
    if(caddy){
      this.caddy = JSON.parse(caddy);
    }else{
      this.caddy = new Caddy();
    }




    // @ts-ignore
    //this.myCaddy.date = new Date();
  }
  public addProductToCaddy(product: Product){

   /* this.caddy = this.caddies.get(this.currentCaddyName);
    //console.log(caddy);
    let productItem: ItemProduct = this.caddy.items.get(product.id);
    if (productItem) {
      productItem.quantity += product.quantity;
    }
    else {
      productItem = new ItemProduct();
      productItem.price = product.price;
      productItem.quantity = product.quantity;
      productItem.name = product.name;
      productItem.id = product.id;

      this.caddy.items.set(product.id, productItem);
      console.log('produit ajouté dans panier : ', this.caddy);
      this.saveCaddy();



    }*/
   let index: ItemProduct;
   for ( const p of this.caddy.item){
      if(product.id == p.id){
        index = p;
      }
   }

   if(index){
     index.quantity += product.quantity
   } else {
     index = new ItemProduct();
     index.quantity = product.quantity;
     index.id = product.id;
     index.name = product.name;
     index.price = product.price;
     this.caddy.item.push(index);
     console.log('produit ajouté au panier : ' , this.caddy);
     this.currentLigne ++;
     this.saveCaddy();
   }
 /* let productItem: ItemProduct = this.caddy.item[product.id];
  if(productItem){

    productItem.quantity += product.quantity;
  } else {
    productItem = new ItemProduct();
    productItem.price = product.price;
    productItem.quantity = product.quantity;
    productItem.name = product.name;
    productItem.id = product.id;

    this.caddy.item.push(productItem);
    console.log('produit ajouté au panier : ' , this.caddy);
    this.currentLigne ++;
    this.saveCaddy();
  }*/

  }

  public getSousT(items: ItemProduct){
    let item: ItemProduct;
    if(typeof items == undefined){
      item = new ItemProduct();
    }else{
      item = items;
    }
    this.sousTotal.push(item.quantity * item.price);

    return item.quantity*item.price;
  }
  public saveCaddy() {
    localStorage.setItem('caddy', JSON.stringify(this.caddy));
  }

  /*public totalCommande(): number {
    let total: number = 0;
    let items: IterableIterator<ItemProduct> = this.getCurrentCaddy().items.values();
    for (let pi of items) {
        total += pi.price * pi.quantity;
    }

    return total;
  }*/

  public totalCommade(): number {
    let total: number = 0;
    for ( const i of this.caddy.item){
      total += i.quantity * i.price;
    }
    return  total;
  }

  public deleteItem(n : number) {

    this.caddy.item.splice(n,1);
    this.currentLigne --;
   /* this.getCurrentCaddy().item.delete(items.id);
    this.cleanConsole();*/

  }

}
