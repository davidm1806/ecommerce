import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() {
  }

  public saveInLocaleAuthenticatedUser(user) {
   // localStorage.setItem('', JSON.stringify(user));
    //localStorage.getItem()
  }

  public loadLoadUserInLocalStorage() {
    const user = JSON.parse(localStorage.getItem('costumer'));
    if (user) {
      return user;
    } else {
      return null;
    }
  }
}
