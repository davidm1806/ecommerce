import { Component, OnInit } from '@angular/core';
import {CaddiesComponent} from '../caddies/caddies.component';
import {CommandeService} from '../service/commande.service';
import {CaddyService} from '../service/caddy.service';
import {Custumer} from '../../model/custumer.model';
import {Oder} from '../../model/Oder';
import {Caddy} from '../../model/caddy.model';

@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.component.html',
  styleUrls: ['./detailcommande.component.css']
})
export class DetailcommandeComponent implements OnInit {

  confirmeCommande: boolean = true;
  pay: boolean = false;
  public custumer;
  public oder: Oder ;
  public caddy: Caddy;


 // name = JSON.parse(localStorage.getItem('authToken')).firstName;
  constructor(private commande: CommandeService,
              private caddyService: CaddyService) { }

  ngOnInit() {
    //console.log(JSON.parse(localStorage.getItem('authToken')));
    this.oder =  new Oder();
    //const name = JSON.parse(localStorage.getItem('authToken')).firstName;
    this.caddy = JSON.parse(localStorage.getItem('caddy'));
    this.custumer = JSON.parse(localStorage.getItem('costumer')) ;

    console.log('current user', this.custumer.phone);
    console.log('curent item : ', this.caddy);
  }

  loadProductInOrder(){
    this.oder.lineItems = [];
    for(const item of this.caddy.item) {
      this.oder.lineItems.push(item);
    }
    console.log(this.oder.lineItems);
  }

  confirmationCommande() {
    this.loadProductInOrder();
    this.oder.custumer.phone = this.custumer.phone;
    this.oder.custumer.id = this.custumer.id;
    this.oder.custumer.firstName = this.custumer.firstName;
    this.oder.custumer.lastName = this.custumer.lastName;
    this.oder.custumer.email = this.custumer.email;
    this.oder.custumer.adresseLiv = this.custumer.adresseLiv;
    this.oder.totalPrice = this.getTotal();
    this.commande.submitOrder(this.oder).subscribe(value => {
      console.log("utilisateur envoye:",this.oder.custumer);
      this.oder.id = value['id'];
      this.oder.date = value['date'];
      localStorage.removeItem('caddy');
      this.confirmeCommande = false;
      this.pay = true;
    },error => {
      console.log('echec enregistrement');
      console.log(this.oder);
    })

  }

  public getTotal(): number{
    let total: number = 0;
    this.oder.lineItems.forEach(p=>{
      total += p.price * p.quantity;
    })
    return total;
  }


  payer() {
    this.confirmeCommande = true;
    this.pay = false;
  }
}
