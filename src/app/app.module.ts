import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPopper } from 'angular-popper';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CaddiesComponent } from './caddies/caddies.component';
import { ClientComponent } from './client/client.component';
import { DetailcommandeComponent } from './detailcommande/detailcommande.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegisterComponent,
    ProductDetailComponent,
    CaddiesComponent,
    ClientComponent,
    DetailcommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  //  ConnexionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
