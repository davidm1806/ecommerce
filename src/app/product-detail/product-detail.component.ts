import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public curentProduct;
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private catService: CatalogueService) { }

  ngOnInit() {
    let url = atob(this.route.snapshot.params.url);
    this.catService.getProduct(url).subscribe(data => {
      this.curentProduct = data},  err => {
        console.log(err);
      });
    
    //console.log(url); 
  }

}
