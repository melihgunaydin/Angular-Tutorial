import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == "melih" && user.password == "12345") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;

    } else {
      return false;
    }
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }

}
