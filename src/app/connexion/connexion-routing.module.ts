import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const loginRoute: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoute)
  ],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
