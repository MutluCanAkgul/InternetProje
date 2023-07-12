import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  registerForm:FormGroup
  
  constructor(private localStorage:SharedService){
     this.registerForm = new FormGroup({
      name: new FormControl('',[Validators.required,]),
      surname: new FormControl('',[Validators.required,]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
      
     })
  }
  ngOnInit(): void {
    
  }
 kayitOl(){
  if(this.name === null && this.surname === null && this.email === null && this.password === null){
    alert("alanların doldurulması zorunludur");
  }
  else{
  this.localStorage.kayitOl(this.registerForm)
 }
}
 get name(){
  return this.registerForm.get('name');
 }
 get surname(){
  return this.registerForm.get('surname');
 }
 get email(){
  return this.registerForm.get('email');
 }
 get password(){
  return this.registerForm.get('password');
 }
}
