import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from 'src/model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

   public host: string = 'http://localhost:8180';
   private curenCat: number = 1;

  constructor(private http: HttpClient) { }


  public getResource(url) {
    return this.http.get(this.host + url);
  }

  public getProduct(url): Observable<Product> {
    return this.http.get<Product>(url);
  }


}
