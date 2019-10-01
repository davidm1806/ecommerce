import { Component, OnInit } from '@angular/core';
import {Custumer} from '../../model/custumer.model';
import {Router} from '@angular/router';
import {CatalogueService} from '../catalogue.service';
import {ClientService} from '../service/client.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export function mustMatch(password: string, confirmPassword: string) {
  return(formGroup: FormGroup) =>{
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[confirmPassword];

    if(matchingControl.errors){
      return;
    }
    if(control.value !== matchingControl.value){
      matchingControl.setErrors({mustMach: true});
    } else {
      matchingControl.setErrors(null);
    }
  }
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public user;
  public custumerRecive;
  public custumers: Custumer;
  public registerForm: FormGroup;
  public submitted = false;
  public login = {
    firstName: '',
    lastName : '',
    password : '',
    login : '',
    role: ''
  }



  constructor(
    private client: ClientService,
    private router: Router,
    private catalogue: CatalogueService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      ville: '',
      quartier: '',
      adresseLiv: ''
    }, {
      validator: mustMatch('password', 'confirmPassword')
    });

  }

  get f() { return this.registerForm.controls; }

  saveClient(){
    const formValue = this.registerForm.value;
    let custumerString: string;
    // stop here if form is invalid
    if (this.registerForm.invalid == false) {
      this.login.firstName = formValue['firstName'];
      this.login.lastName = formValue['lastName'];
      this.login.login = formValue['email'];
      this.login.password = formValue['password'];

      custumerString = formValue;
      //localStorage.setItem("custumer", JSON.stringify(custumerString));
      this.client.saveNewClient(formValue).subscribe(resp => {
        this.custumerRecive = resp;
        localStorage.setItem('costumer', JSON.stringify(this.custumerRecive));
       this.router.navigateByUrl('/');
      } , err => {
        console.log("erreur d'enregistrement");
      });
    }else{
      console.log('le formulaire est non valide');
    }


  }

  reset() {
    this.custumers = new Custumer();
  }
}
