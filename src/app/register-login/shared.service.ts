import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router:Router) { }
  kayitOl(registerForm:FormGroup){
   let  users = [];
   if(localStorage.getItem('kullanicilar')){
    users = JSON.parse(localStorage.getItem('kullanicilar') || '[]');
   }

   users.push(registerForm.value);
   localStorage.setItem('kullanicilar',JSON.stringify(users));
   
  }

  kontrolEt(loginForm:any):void{
  const email1 = loginForm.value.email;
  const password1 = loginForm.value.password;
  const veriler = JSON.parse(localStorage.getItem('kullanicilar') || '[]');
  const kullaniciBul = veriler.find((kullanici:any)=>kullanici.email === email1 && kullanici.password === password1)
  if(kullaniciBul){
    localStorage.setItem('girisOlduMu','evet');
    this.router.navigate(['/anasayfa']);
  }
  else{
    alert("E-posta veya Şifre Hatalı");
    localStorage.setItem('girisOlduMu','hayır');
  }
  }
}
