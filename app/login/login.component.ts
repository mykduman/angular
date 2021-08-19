import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { user } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  model:user = new user('mehmetcik','12345')
  ngOnInit(): void {
  }


login(form:NgForm){
this.accountService.login(this.model)
}



}
