import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CaddiesComponent } from './caddies/caddies.component';
import { ClientComponent } from './client/client.component';
import {DetailcommandeComponent} from './detailcommande/detailcommande.component';
import {VefificationAuthService} from './service/vefification-auth.service';

export const routes: Routes = [
    {path: 'login', loadChildren: './connexion/connexion.module#ConnexionModule'},
    {path: 'product/:p1/:p2', component: ProductComponent},
    {path: '', redirectTo: 'product/0/1', pathMatch: 'full'},
    {path: 'product-detail/:url', component: ProductDetailComponent},
    {path: 'caddies', component: CaddiesComponent},
    {path: 'formclient', component: ClientComponent},
    {path: 'detailCommande', canActivate: [VefificationAuthService], component: DetailcommandeComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
export const routingcomponent = [ProductComponent];
