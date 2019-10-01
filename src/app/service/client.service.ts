import { Injectable } from '@angular/core';
import { Custumer } from 'src/model/custumer.model';
import {CatalogueService} from '../catalogue.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientService {


  public custumer: Custumer = new Custumer();
  public message: Map<string, string> = new Map<string, string>();

  constructor(private catalogue: CatalogueService,
              private http: HttpClient) { }

     saveNewClient(customers)
     {
      return this.http.post('http://localhost:8180/custumer', customers );
      //return this.http.post('http://localhost:8180/saveCustumer', customers );
     }

}
