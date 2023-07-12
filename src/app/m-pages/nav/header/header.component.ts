
import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/register-login/shared.service';
import { RegisterComponent } from 'src/app/register-login/register/register.component';
import { RegisterModule } from 'src/app/register-login/register.module';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users:any;
   constructor(private sharedService:SharedService){
    this.users = this.sharedService.kontrolEt.name;
   }
  ngOnInit(): void {
   
  }

}
