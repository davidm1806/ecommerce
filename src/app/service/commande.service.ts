import { Injectable } from '@angular/core';
import {Oder} from '../../model/Oder';
import {CaddyService} from './caddy.service';
import {Custumer} from '../../model/custumer.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {




  private detailUser;
  public oder: Oder = new Oder();
  public custumer: Custumer = JSON.parse(localStorage.getItem('authToken'));
  public confirmeCommande: boolean = true;
  public pay: boolean = false;

  constructor(private caddyService: CaddyService,
              private http: HttpClient) {
    this.detailUser = JSON.parse(localStorage.getItem('authToken'));
   /* this.user.adrese = this.detailUser.adresseLiv;
    this.user.email = this.detailUser.email;
    this.user.firstName = this.detailUser.firstName;
    this.user.lastName = this.detailUser.lastName;
    this.user.phone = this.detailUser.phone;*/

    /*
    *********************************************************************
     */
   /* this.oder.costumer.phone = this.detailUser.phone;
    this.oder.costumer.firstName = this.detailUser.firstName;
    this.oder.costumer.lastName = this.detailUser.lastName;
    this.oder.costumer.email = this.detailUser.email;
    this.oder.costumer.adresseLiv = this.detailUser.adresseLiv;*/
  }



  public setCustumer(custumer: Custumer){
    this.oder.custumer = custumer;
  }
  getOrder(){
    return JSON.stringify(this.oder);
  }


  payer() {

  }

  submitOrder(order) {
    return this.http.post('http://localhost:8180/saveCommande', order);
  }
}
