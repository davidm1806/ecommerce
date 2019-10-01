import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CaddyService} from './caddy.service';
import {Oder} from '../../model/Oder';
import {Custumer} from '../../model/custumer.model';
import {Observable} from 'rxjs';
import {CatalogueService} from '../catalogue.service';

@Injectable({
  providedIn: 'root'
})
export class OderService {
  public oder: Oder = new Oder();
  public custumer: Custumer = JSON.parse(localStorage.getItem('authToken'));

  constructor(private httpClient: HttpClient,
              private caddyService: CaddyService,
              private catService: CatalogueService) { }

  public setCustumer(){
    this.oder.custumer = this.custumer;
  }
 /* public loadProductFromCaddy(){
    this.oder.lineItem = [];
    // tslint:disable-next-line:forin
    for (const key in this.caddyService.getCurrentCaddy().items){
      this.oder.lineItem.push(this.caddyService.getCurrentCaddy().items[key]);
    }
  }*/
  public getTotal(): number{
    let total: number = 0;
    this.oder.lineItems.forEach(p=>{
      total += p.price * p.quantity;
    })
    return total;
  }
  public submitOrder(){
    return this.httpClient.post(this.catService.host+'/saveCommande',this.oder);
  }
  /*public getOder(id:number): Observable<Oder>{
    return this.httpClient.get<Oder>(this.catService.host + '/oder' + id);
  }*/
}
