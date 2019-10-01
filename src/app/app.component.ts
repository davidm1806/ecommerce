import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';
import { Router } from '@angular/router';
import { CaddyService } from './service/caddy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private catalogue;
  private currentCat;
  constructor(
    private catService: CatalogueService,
    private router: Router,
    public caddyService: CaddyService
    ){}
  ngOnInit(): void {
   // this.authService.loadLoadUserInLocalStorage();
    this.getCategories();
  }
  private getCategories() {
    this.catService.getResource('/catalogue').subscribe(
      data => {
        this.catalogue = data;
      },  err => {
        console.log(err);
      })
  }

  public getProductByCat(c) {
    this.currentCat = c;
    this.router.navigateByUrl('/product/1/' + c.id);
  }
  public onLogOut(){
    //this.authService.removeTokenFromLocalStorage();
    this.router.navigateByUrl('/login');
  }

}
