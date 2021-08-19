import { Injectable } from '@angular/core';
import { user }  from 'src/app/login/user'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn = false ;
  login(user:user):boolean{
    if(user.userName=="mehmetcik"&&user.password=="12345"){
      this.loggedIn = true;
      localStorage.setItem("isLogged",user.userName)
      return true
    }
   return false
  }

  isLoggedIn(){
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem("isLogged")
    this.loggedIn=false;
  }
}
