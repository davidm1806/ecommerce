import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Product } from 'src/model/product.model';
import { CaddyService } from '../service/caddy.service';
import { Caddy } from 'src/model/caddy.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products;
  private c;
  constructor(
    private catalogue: CatalogueService,
    private route: ActivatedRoute,
    private router: Router,
    private caddy: CaddyService
    ) { }

  ngOnInit() {
    this.router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        let url = val.url;
        console.log(url);
        let param = this.route.snapshot.params.p1;
        if(param == 0) {
       this.getProduits("/product/search/selected");
      } else if (param == 1){
          let idCat= this.route.snapshot.params.p2;
          this.getProduits("/catalogue/"+ idCat + "/products");
      }
      }
    });
    let param = this.route.snapshot.params.p1;
    if(param == 0) {
      this.getProduits("/product/search/selected");
    }
    //console.log(param);
  }
  private getProduits(url) {
    return this.catalogue.getResource(url).
    subscribe(data => {
        this.products = data;
      },  err => {
        console.log(err);
      });
  }
  public productDetail(p: Product) {
    let url = btoa(p._links.product.href);
    this.router.navigateByUrl("product-detail/" + url);
  } 

  public onAddProduct(p: Product){
    this.caddy.addProductToCaddy(p);
  }
}
