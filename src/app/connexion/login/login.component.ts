import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { checkAndUpdateElementInline } from '@angular/core/src/view/element';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {VefificationAuthService} from '../../service/vefification-auth.service';
import {AuthentificationService} from '../../service/authentification.service';
import {CommandeService} from '../../service/commande.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 private userAuthentifie;
 private curentUser;
 private passwordconfir;
  public registerForm: FormGroup;
  public controlAff: boolean = false;
  private isAuthentificate: boolean = false;

  constructor( //private authService: AuthentificationService,
                private verificationAuth: VefificationAuthService,
               private router: Router,
               private http: HttpClient,
               private formBuilder: FormBuilder,
                private authService: AuthentificationService,
                private orderService: CommandeService) { }
  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      confirlogin: '',
      password: '',
      message: ''
    });
    const user = this.authService.loadLoadUserInLocalStorage();
    if(user){
      this.verificationAuth.validation = true;
      this.curentUser = user;
      console.log(this.curentUser.firstName);
    }
  }
  /*public onLogin(value: any){
    console.log(value);
   this.authService.login(value.userName, value.password);

    if(this.authService.isAuthentificate) {
      this.authService.saveAuthenticatedUser();
      this.router.navigateByUrl('detailCommande');
    }

  }*/
  get f() { return this.registerForm.controls; }

  public onLogin(){

    console.log(this.registerForm.value.confirlogin + "   --- "+ this.registerForm.value.password);
    const email = this.registerForm.value.confirlogin;
    const password = this.registerForm.value.password;
    // test si tous les champs sont remplis
    if(email == '' || password == ''){
      this.controlAff = true;

      this.registerForm.value.message = "veillez remplir tous les champs";
    } else {
      this.controlAff = false;
      this.authentificationRoute(email, password ).subscribe((value => {
        this.userAuthentifie = value;
        console.log( 'enregistré avec succès\n' + this.userAuthentifie);
          this.verificationAuth.validation = true;


          //this.authService.saveAuthenticatedUser();
         /*this.orderService.custumer.adresseLiv = this.userAuthentifie.adresseLiv;
         this.orderService.custumer.email = this.userAuthentifie.email;
         this.orderService.custumer.firstName = this.userAuthentifie.firstName;
         this.orderService.custumer.lastName = this.userAuthentifie.lastName;
         this.orderService.custumer.phone = this.userAuthentifie.phone;
         // this.orderService.setCustumer(this.userAuthentifie);
          console.log(this.orderService.custumer.email);*/

          this.authService.saveInLocaleAuthenticatedUser(this.userAuthentifie);
          this.router.navigateByUrl('detailCommande');
      }),error => {

        this.controlAff = true;
        this.registerForm.value.message = "mot de passe ou email invalide";
      });
    }

  }



  authentificationRoute(login, password){
    return this.http.get('http://localhost:8180/custumer/search/isAuthentifie?e=' + login + '&p=' + password);
  }
}
