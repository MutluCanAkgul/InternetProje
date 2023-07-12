import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private localStorage:SharedService){
    this.loginForm = new FormGroup({
      email : new FormControl,
      password : new FormControl
    })
  }
  ngOnInit(): void {
   
  }
girisYap(){
  this.localStorage.kontrolEt(this.loginForm);
}
}
